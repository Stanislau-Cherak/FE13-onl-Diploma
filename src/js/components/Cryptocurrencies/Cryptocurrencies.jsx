import React, { useState, useEffect } from "react";
import axios from "axios";

import './Cryptocurrencies.scss';

import { optionsGetCoins } from '../../helpers/axiosOptions.js';
import CoinCard from '../CoinCard/CoinCard.tsx';

const Cryptocurrencies = () => {

    const [coinsList, setCoinsList] = useState([]);
    const [searchMask, setSearchMask]=useState('');
    const [isBusy, setIsBusy] = useState(true);

     useEffect(() => {
         axios.request(optionsGetCoins)
             .then((response) => {
                 setCoinsList(response.data.coins);
                 setIsBusy(false);
                 console.log(coinsList)
             });
     }, [])

    const coins = [
        {
            name: "Bitcoin",
            iconUrl: "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
            rank: 1,
            price: "9370.9993109108",
            marketCap: "159393904304",
            change: "-0.52"
        },
        {
            name: "Bitcoin",
            iconUrl: "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
            rank: 1,
            price: "9370.9993109108",
            marketCap: "159393904304",
            change: "-0.52"
        },
        {
            name: "Bitcoin",
            iconUrl: "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
            rank: 1,
            price: "9370.9993109108",
            marketCap: "159393904304",
            change: "-0.52"
        },
        {
            name: "Bitcoin",
            iconUrl: "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
            rank: 1,
            price: "9370.9993109108",
            marketCap: "159393904304",
            change: "-0.52"
        },
    ]

    const preparedCoins = coins.filter((coin) => {
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

            <div className='cryptocurrencies'>
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
        </>
    )
}

export default Cryptocurrencies;