import React from "react";

import { nFormatter } from "../../helpers/nFormatter.js";

import './CoinCard.scss';

interface CoinCardProps {
    rank: number;
    name: string;
    iconUrl: string;
    price: string;
    marketCap: string;
    change: string;
}

const CoinCard: React.FC<CoinCardProps> = ({ rank, name, iconUrl, price, marketCap, change }) => {

    const preparedPrice=nFormatter(Number(price), 2);
    const preparedMarketCap=nFormatter(Number(marketCap), 2);

    return (
        <>
            <div className='card-header'>
                <span className='card-header_title'>{rank}. {name}</span>
                <img src={iconUrl} alt={name} />
            </div>
            <div className='card-body'>
                <span className='card-body_text'>
                    Price: {preparedPrice}
                </span>
                <span className='card-body_text'>
                    Market Cap: {preparedMarketCap}
                </span>
                <span className='card-body_text'>
                    Daily Change: {change}
                </span>
            </div>
        </>
    )
}

export default CoinCard;
