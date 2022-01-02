import React, { useState, useEffect } from "react";
import axios from "axios";

import './Cryptocurrencies.scss';

import { optionsGetCoins } from '../../helpers/axiosOptions.js';
import CoinCard from '../CoinCard/CoinCard.tsx';

const Cryptocurrencies = () => {

    const [coinsList, setCoinsList] = useState([]);
    const [searchMask, setSearchMask] = useState('');
    const [isBusy, setIsBusy] = useState(true);

    useEffect(() => {
        axios.request(optionsGetCoins).then((response) => {
            setCoinsList(response.data.data.coins);
            setIsBusy(false);
        })
    }, [])

    const preparedCoins = coinsList.filter((coin) => {
        return coin.name.toLowerCase().includes(searchMask.toLowerCase())
    });

    return (
        <>
            <div className='form'>
                <input
                    id='search'
                    type='text'
                    placeholder='Search Cryptocyrrency'
                    onChange={(event) => setSearchMask(event.target.value)}
                />
            </div>
            {isBusy
                ? null
                : <div className='cryptocurrencies'>
                    {
                        preparedCoins.map((coin, index) => {
                            return (
                                <div key={index} className='coin-card'>
                                    <CoinCard {...coin} />
                                </div>
                            )
                        })
                    }
                </div>
            }

        </>
    )
}

export default Cryptocurrencies;

/**/