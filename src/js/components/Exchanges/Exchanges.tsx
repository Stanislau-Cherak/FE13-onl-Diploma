import axios from "axios";
import React, { useState, useEffect } from "react";

import { axiosOptionsExchanges } from "../../helpers/axiosOptions";

import { ExchangeType, ExchangesResponce } from "../../types/types";

import ExchangeCard from "../ExchangeCard/ExchangeCard";
import LoadingBar from "../LoadingBar/LoadingBar";

import './Exchanges.scss';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState<ExchangeType[]>([]);
  const [isBusy, setIsBusy] = useState<boolean>(true);

  useEffect(() => {
    axios.request<ExchangesResponce>(axiosOptionsExchanges).then((response) => {
      setExchanges(response.data.data.exchanges);
      setIsBusy(false);
    })
  }, []);

  return (
    <>
      {isBusy
        ? <LoadingBar className='loading-bar_wrapper' />
        : <div className='exchanges_cards'>
          <div className='title-table'>
            <span className='title-table_title'>Exchanges</span>
            <span className='title-table_volume'>24h Trade Volume</span>
            <span className='title-table_market'>Markets</span>
            <span className='title-table_share'>Change</span>
          </div>
          {
            exchanges.map((exchange, index) => {
              return (
                <ExchangeCard key={index} {...exchange} />
              )
            })
          }
        </div>
      }
    </>
  )
}

export default Exchanges;
