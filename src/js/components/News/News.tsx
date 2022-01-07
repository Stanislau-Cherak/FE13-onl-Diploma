import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import useClickOutside from '../../helpers/useClickOutside';

import { axiosOptionsCoins, getAxiosOptionsNews } from '../../helpers/axiosOptions';
import { aFilter } from '../../helpers/aFilter';
import { sFormatter } from '../../helpers/sFormatter';

import NewsCard from '../NewsCard/NewsCard';
import LoadingBar from '../LoadingBar/LoadingBar';

import NoImage from '../../../image/no_image.jpg';

import { CoinType, CoinsResponce } from "../../types/types";

import './News.scss';

const News = () => {

    const navigate = useNavigate();
    const { search } = useParams();

    const [news, setNews] = useState([]);
    const [coins, setCoins] = useState<CoinType[]>([]);
    const [searchNewsRequest, setSearchNewsRequest] = useState<string>(search || 'Cryptocurrencies');
    const [searchCoinMask, setSearchCoinMask] = useState<string>('');
    const [isBusy, setIsBusy] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(true);
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

    const optionsNewsSearch = getAxiosOptionsNews(20, searchNewsRequest);

    useEffect(() => {
        setSearchNewsRequest(search || 'Cryptocurrencies');
    }, [search])

    useEffect(() => {

        const coinsPromise = axios.request<CoinsResponce>(axiosOptionsCoins);
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

                    <span className='search-result_description'>News for the last month on the: "{searchNewsRequest}".</span>

                    <div className='news'>
                        {news.length !== 0
                            ? news.map((news, index) => {
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
