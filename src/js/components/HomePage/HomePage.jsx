import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import CoinCard from '../CoinCard/CoinCard.tsx';
import NewsCard from '../NewsCard/NewsCard.tsx';
import LoadingBar from '../LoadingBar/LoadingBar.tsx';

import { nFormatter } from "../../helpers/nFormatter.js";
import { sFormatter } from '../../helpers/sFormatter.js';
import { optionsGetCoins, optionsNewsSearch } from '../../helpers/axiosOptions.js';

import NoImage from '../../../image/no_image.jpg';

import './HomePage.scss';

const HomePage = () => {

    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([]);
    const [isBusy, setIsBusy] = useState(true);

    optionsGetCoins.params.limit = '10';
    optionsNewsSearch.params.count = '6';
    optionsNewsSearch.params.q = 'Cryptocurrencies';


    useEffect(() => {

        const coinsPromise = axios.request(optionsGetCoins);
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
                ? <LoadingBar className='loading-bar_wrapper'/>
                :
                <>
                    <div className='home-statistics_section'>
                        <h2 className='home_title'>Global Crypto Stats</h2>
                        <div className='home-statistics_cards'>
                            <span className='home-statistics_text'>
                                Total Cryptocurrencies: {coins.stats.totalCoins}
                            </span>
                            <span className='home-statistics_text'>
                                Total Market Cap: {nFormatter(Number(coins.stats.totalMarketCap), 1)}
                            </span>
                            <span className='home-statistics_text'>
                                Total Exchanges: {coins.stats.totalExchanges}
                            </span>
                            <span className='home-statistics_text'>
                                Total Volume(24h): {nFormatter(Number(coins.stats.total24hVolume), 1)}
                            </span>
                            <span className='home-statistics_text'>
                                Total Markets: {coins.stats.totalMarkets}
                            </span>
                        </div>
                    </div>

                    <div className='home-coins_section'>
                        <h2 className='home_title'>Top 10 Criptos In The World</h2>

                        <div className='home-coins_cards'>
                            {
                                coins.coins.map((coin, index) => {
                                    return (
                                        <div key={index} className='coin-card'>
                                            <CoinCard {...coin} />
                                        </div>
                                    )
                                })
                            }
                            <NavLink to={'/Cryptocurrencies'}>Show More</NavLink>
                        </div>

                    </div>
                    <div className='home-news_section'>
                        <h2 className='home_title'>Latest News</h2>
                        <div className='home-news_cards'>
                            {
                                news.map((news, index) => {
                                    return (
                                        <div key={index} className='news-card'>
                                            <NewsCard
                                                newsName={news.name}
                                                newsUrl={news.url}
                                                newsDescription={news.description}
                                                newsImage={news.image ? news.image.thumbnail.contentUrl : NoImage}
                                                providerName={news.provider[0].name}
                                                providerUrl={news.provider[0].image ? news.provider[0].image.thumbnail.contentUrl : NoImage}
                                                publishedDate={sFormatter(news.datePublished)}
                                            />
                                        </div>
                                    )
                                })
                            }
                            <NavLink to={'/News'}>Show More</NavLink>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default HomePage;
