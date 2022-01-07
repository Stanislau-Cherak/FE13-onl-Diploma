import React, { useState } from "react";

import { ExchangeType } from "../../types/types";

import { nFormatter } from "../../helpers/nFormatter";

import './ExchangeCard.scss';

const ExchangeCard: React.FC<ExchangeType> = ({ name, rank, iconUrl, description, volume, numberOfMarkets, marketShare }) => {

  const [isOpen, setIsOpen] = useState(false);

  const itemClickHandler = () => {
    setIsOpen(!isOpen)
  }

  const preparedVolume = nFormatter(volume, 2);

  return (
    <>
      <div className='exchange-card' onClick={itemClickHandler}>
        <div className='exchange-card_title'>
          <span>{rank}.</span>
          <img src={iconUrl} alt={name} />
          <span>{name}</span>
        </div>
        <span className='exchange-card_volume'>{preparedVolume}</span>
        <span className='exchange-card_market'>{numberOfMarkets}</span>
        <span className='exchange-card_share'>{marketShare.toFixed(2)}%</span>
        {isOpen
          ? <div className='exchange_description'>
            {description
              ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
              : <span>Sorry, description not found.</span>}
          </div>
          : null
        }
      </div>
    </>
  )
}

export default ExchangeCard;