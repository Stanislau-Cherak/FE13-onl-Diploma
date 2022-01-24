import React from "react";

import { useNavigate } from 'react-router-dom';

import { nFormatter } from "../../helpers/nFormatter";

import './CoinCard.scss';

import { CoinType } from "../../types/types";

const CoinCard: React.FC<CoinType> = ({ uuid, rank, name, iconUrl, price, marketCap, change }) => {

    const navigate = useNavigate();

    const preparedPrice = nFormatter(Number(price), 2);
    const preparedMarketCap = nFormatter(Number(marketCap), 2);

    const cardClickHandler = () => {
        navigate(`/Coin/${name}`, { state: uuid });
    }

    return (
        <div className='coin-card' onClick={cardClickHandler}>
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
        </div>
    )
}

export default CoinCard;
