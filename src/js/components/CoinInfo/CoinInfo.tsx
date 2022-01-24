import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import { getAxiosOptionsCoin, getAxiosOptionsCoinHistory } from '../../helpers/axiosOptions';
import { nFormatter } from '../../helpers/nFormatter';
import { dFormatter } from '../../helpers/dFormatter';

import LoadingBar from '../LoadingBar/LoadingBar';
import Dropdown from '../Dropdown/Dropdown';

import { CoinBigType, CoinResponce, CoinHistoryDataType, CoinHistoryResponce } from '../../types/types';

import './CoinInfo.scss';

const CoinInfo = () => {

  const location = useLocation();
  const firstRender = useRef<boolean>(true);

  const [isBusy, setIsBusy] = useState<boolean>(true);
  const [coin, setCoin] = useState<CoinBigType>();
  const [coinHistory, setCoinHistory] = useState<CoinHistoryDataType>();
  const [timeInterval, setTimeInterval] = useState<string>('24h');

  const optionsCoin = getAxiosOptionsCoin(location.state);
  const optionsCoinHistory = getAxiosOptionsCoinHistory(location.state, timeInterval);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      axios.request<CoinHistoryResponce>(optionsCoinHistory)
        .then(responce => setCoinHistory(responce.data.data));
    }
  }, [timeInterval]);

  useEffect(() => {

    const coinPromise = axios.request<CoinResponce>(optionsCoin);
    const coinHistoryPromise = axios.request<CoinHistoryResponce>(optionsCoinHistory);

    Promise.all([coinPromise, coinHistoryPromise])
      .then(([coinData, coinHistoryData]) => {
        setCoin(coinData.data.data.coin);
        setCoinHistory(coinHistoryData.data.data);
        setIsBusy(false);
      })
  }, [])

  const timeChangeHandler = (option: string) => {
    setTimeInterval(option)
  }

  const chartData = {
    labels: coinHistory?.history?.map(history => dFormatter(history.timestamp)),
    datasets: [
      {
        label: 'Price in USD',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(24, 94, 224, 1)',
        borderColor: 'rgba(24, 94, 224, 1)',
        borderWidth: 2,
        data: coinHistory?.history?.map(history => Number(history.price).toFixed(2))
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <>
      {isBusy
        ? <LoadingBar className='loading-bar_wrapper' />
        :
        <div className='coin-info'>
          <span className='coin-title'>{coin.name} {coin.symbol} Price</span>
          <span className='coin-title_description'>
            {coin.name} live price in US Dollar (USD).
            View value statistics, market cap and supply.
          </span>

          <div className='dropdown'>
            <Dropdown selectedValue={timeInterval} optionsList={['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']} onClick={timeChangeHandler} />
          </div>

          <div className='curve-description'>
            <span className='curve-title'>{coin.name} Price Chart</span>
            <span className='curve-description_text'>Change: {coinHistory.change}% </span>
            <span className='curve-description_text'>Curent {coin.name} Price: {nFormatter(Number(coin.price), 2)}</span>
          </div>

          <div className='curve'>
            <Line data={chartData} height={400} options={chartOptions} />
          </div>

          <div className='statistics'>

            <div className='statistics-card'>
              <span className='statistics-card_title'>{coin.name} Value Statistics</span>
              <span className='statistics-card_description'>
                An overview showing the statistics of {coin.name}, such as the base and quote currency, the rank and trading volume.
              </span>
              <div className='statistics-card_body'>
                <span className='statistics-card_body-description'>Price to USD</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin.price), 2)}</span>
                <span className='statistics-card_body-description'>Rank</span>
                <span className='statistics-card_value'>{coin.rank}</span>
                <span className='statistics-card_body-description'>24hVolume</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin['24hVolume']), 2)}</span>
                <span className='statistics-card_body-description'>Market Cap</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin.marketCap), 2)}</span>
                <span className='statistics-card_body-description'>All time high (daily avg.)</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin.allTimeHigh.price), 2)}</span>
              </div>
            </div>

            <div className='statistics-card'>
              <span className='statistics-card_title'>Other Stats Info</span>
              <span className='statistics-card_description'>
                An overview showing the statistics of {coin.name}, such as the base and quote currency, the rank and trading volume.
              </span>
              <div className='statistics-card_body'>
                <span className='statistics-card_body-description'>Number of Markets</span>
                <span className='statistics-card_value'>{coin.numberOfMarkets}</span>
                <span className='statistics-card_body-description'>Number of Exchanges</span>
                <span className='statistics-card_value'>{coin.numberOfExchanges}</span>
                <span className='statistics-card_body-description'>Approved Supply</span>
                <span className='statistics-card_value'>{coin.supply.confirmed ? 'yes' : 'no'}</span>
                <span className='statistics-card_body-description'>Total Supply</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin.supply.total), 2)}</span>
                <span className='statistics-card_body-description'>Circulating Supply</span>
                <span className='statistics-card_value'>{nFormatter(Number(coin.supply.circulating), 2)}</span>
              </div>
            </div>

          </div>

          <div className='about'>
            <div className='about-description'>
              <span className='about-description_title'>
                What is {coin.name}?
              </span>
              {coin.description
                ? <div className='about-description_text' dangerouslySetInnerHTML={{ __html: coin.description }}></div>
                : <span>Sorry, description not found.</span>
              }
            </div>

            <div className='about-links'>
              <span className='about-links_title'>{coin.name} Links</span>
              <ul className='about-links_body'>
                {
                  coin.links.map((link, index) => {
                    return (
                      <li key={index} className='link'>
                        <span className='link-name'>{link.type}</span>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CoinInfo;
