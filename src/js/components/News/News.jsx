import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import { optionsGetCoins, optionsNewsSearch } from '../../helpers/axiosOptions.js';
import { sFormatter } from '../../helpers/sFormatter.js';

import NewsCard from '../NewsCard/NewsCard.tsx';

import NoImage from '../../../image/no_image.jpg';

import './News.scss';

const News = () => {

    const navigate = useNavigate();
    const { search } = useParams();
    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([]);
    const [isBusy, setIsBusy] = useState(true);

    optionsNewsSearch.params.count = '21';
    optionsNewsSearch.params.q = search||'Cryptocurrencies';
    optionsGetCoins.params.limit = '99';

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
                ? null
                :
                <div className='news'>
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
                </div>
            }
        </>
    )
}

export default News;
