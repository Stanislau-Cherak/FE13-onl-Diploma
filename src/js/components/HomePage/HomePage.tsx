import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import CoinCard from '../CoinCard/CoinCard';
import NewsCard from '../NewsCard/NewsCard';
import LoadingBar from '../LoadingBar/LoadingBar';

import { nFormatter } from "../../helpers/nFormatter";
import { sFormatter } from '../../helpers/sFormatter';
import { axiosOptionsCoins, getAxiosOptionsNews } from '../../helpers/axiosOptions';

import { DataCoinsType, CoinsResponce } from '../../types/types';

import NoImage from '../../../image/no_image.jpg';

import './HomePage.scss';

const HomePage = () => {

    const [coinsAllData, setCoins] = useState<DataCoinsType>();
    const [news, setNews] = useState([]);
    const [isBusy, setIsBusy] = useState<boolean>(true);

    const optionsNewsSearch = getAxiosOptionsNews(6, 'Cryptocurrencies');

    useEffect(() => {

        const coinsPromise = axios.request<CoinsResponce>(axiosOptionsCoins);
        const newsPromise = axios.request(optionsNewsSearch);

        Promise.all([coinsPromise, newsPromise])
            .then(([coinsData, newsData]) => {
                setCoins(coinsData.data.data);
                setNews(newsData.data.value);
                setIsBusy(false);
            });
    }, []);

    return (

        <>
            {isBusy
                ? <LoadingBar className='loading-bar_wrapper' />
                :
                <>
                    <div className='home-statistics_section'>
                        <h2 className='home_title'>Global Crypto Stats</h2>
                        <div className='home-statistics_cards'>
                            <span className='home-statistics_text'>
                                Total Cryptocurrencies: {coinsAllData.stats.total}
                            </span>
                            <span className='home-statistics_text'>
                                Total Market Cap: {nFormatter(Number(coinsAllData.stats.totalMarketCap), 1)}
                            </span>
                            <span className='home-statistics_text'>
                                Total Exchanges: {coinsAllData.stats.totalExchanges}
                            </span>
                            <span className='home-statistics_text'>
                                Total Volume(24h): {nFormatter(Number(coinsAllData.stats.total24hVolume), 1)}
                            </span>
                            <span className='home-statistics_text'>
                                Total Markets: {coinsAllData.stats.totalMarkets}
                            </span>
                        </div>
                    </div>

                    <div className='home-coins_section'>

                        <div className='home-coins_header'>
                            <h2 className='home_title'>Top 10 Criptos In The World</h2>
                            <NavLink to={'/Cryptocurrencies'}>Show More</NavLink>
                        </div>

                        <div className='home-coins_cards'>
                            {
                                coinsAllData.coins.slice(0, 10).map((coin, index) => {
                                    return (
                                        <CoinCard key={index} {...coin} />
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='home-news_section'>

                        <div className='home-news_header'>
                            <h2 className='home_title'>Latest News</h2>
                            <NavLink to={'/News'}>Show More</NavLink>
                        </div>
                        <div className='home-news_cards'>
                            {
                                news.map((news, index) => {
                                    return (
                                        <NewsCard key={index}
                                            newsName={news.name}
                                            newsUrl={news.url}
                                            newsDescription={news.description}
                                            newsImage={news.image ? news.image.thumbnail.contentUrl : NoImage}
                                            providerName={news.provider[0].name}
                                            publishedDate={sFormatter(news.datePublished)}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default HomePage;
