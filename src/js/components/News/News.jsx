import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import useClickOutside from '../../helpers/useClickOutside.jsx';

import { optionsGetCoins, optionsNewsSearch } from '../../helpers/axiosOptions.js';
import { aFilter } from '../../helpers/aFilter.js';
import { sFormatter } from '../../helpers/sFormatter.js';

import NewsCard from '../NewsCard/NewsCard.tsx';
import LoadingBar from '../LoadingBar/LoadingBar.tsx';

import NoImage from '../../../image/no_image.jpg';

import './News.scss';

const News = () => {

    const navigate = useNavigate();
    const { search } = useParams();

    const [news, setNews] = useState([]);
    const [coins, setCoins] = useState([]);
    const [searchNewsRequest, setSearchNewsRequest] = useState(search || 'Cryptocurrencies');
    const [searchCoinMask, setSearchCoinMask] = useState('');
    const [isBusy, setIsBusy] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef(null);

    useClickOutside(ref, () => {
        setIsOpen(false);
        setSearchCoinMask('');
    });

    const itemClickHandler = (event) => {
        setSearchCoinMask(event.target.textContent);
        setIsOpen(!isOpen);
        setSearchNewsRequest(event.target.textContent);
        navigate(`/News/${event.target.textContent}`);
    }

    const inputClickHandler = () => {
        setIsOpen(true);
        if (searchCoinMask) {
            setSearchCoinMask('')
        }
    }

    optionsGetCoins.params.limit = '99';
    optionsNewsSearch.params.count = '20';
    optionsNewsSearch.params.q = searchNewsRequest;

    useEffect(()=>{
        setSearchNewsRequest(search || 'Cryptocurrencies');
    }, [search])

    useEffect(() => {

        const coinsPromise = axios.request(optionsGetCoins);
        const newsPromise = axios.request(optionsNewsSearch);

        Promise.all([coinsPromise, newsPromise])
            .then(([coinsData, newsData]) => {
                setCoins(coinsData.data.data.coins);
                setNews(newsData.data.value);
                setIsBusy(false);
            });
    }, [searchNewsRequest]);

    return (
        <>
            {isBusy
                ? <LoadingBar className='loading-bar_wrapper' />
                :
                <>
                    <div className='form'>
                        <input
                            id='live-search'
                            type='text'
                            placeholder='Coin news'
                            value={searchCoinMask}
                            onChange={(event) => setSearchCoinMask(event.target.value)}
                            onClick={inputClickHandler}
                        />

                        <ul ref={ref} className='autocomplete'>
                            {searchCoinMask && isOpen
                                ? aFilter(coins, 'name', searchCoinMask).map((coin, index) => {
                                    return (
                                        <li key={index}
                                            className='autocomplete_item'
                                            onClick={itemClickHandler}
                                        >
                                            {coin.name}
                                        </li>
                                    )
                                })
                                : null
                            }
                        </ul>
                    </div>

                    <div className='news'>
                        {news.length !== 0
                            ? news.map((news, index) => {
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
                            : <span className='news-error'>
                                Sorry, but there has been no news about this coin in the last month.
                                Go <Link to="/News">News</Link>
                            </span>
                        }
                    </div>
                </>
            }
        </>
    )
}

export default News;
