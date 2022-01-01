import React from "react";

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

    return (
        <>
            <div className='card-header'>
                <span className='card-header_title'>{rank}. {name}</span>
                <img src={iconUrl} alt={name} />
            </div>
            <div className='card-body'>
                <span className='card-body_text'>
                    Price: {price}
                </span>
                <span className='card-body_text'>
                    Market Cap: {marketCap}
                </span>
                <span className='card-body_text'>
                    Daily Change: {change}
                </span>
            </div>
        </>
    )
}

export default CoinCard;
