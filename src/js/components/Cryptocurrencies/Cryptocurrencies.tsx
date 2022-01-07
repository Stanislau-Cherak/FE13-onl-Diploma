import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosOptionsCoins } from '../../helpers/axiosOptions';

import CoinCard from '../CoinCard/CoinCard';
import LoadingBar from '../LoadingBar/LoadingBar';

import { CoinType, CoinsResponce } from "../../types/types";

import './Cryptocurrencies.scss';

const Cryptocurrencies = () => {

    const [coins, setCoins] = useState<CoinType[]>([]);
    const [searchMask, setSearchMask] = useState<string>('');
    const [isBusy, setIsBusy] = useState<boolean>(true);

    useEffect(() => {
        axios.request<CoinsResponce>(axiosOptionsCoins).then((response) => {
            setCoins(response.data.data.coins);
            setIsBusy(false);
        })
    }, []);

    const preparedCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchMask.toLowerCase())
    });

    return (
        <>
            {isBusy
                ? <LoadingBar className='loading-bar_wrapper' />
                :
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
                                    <CoinCard key={index} {...coin} />
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Cryptocurrencies;
