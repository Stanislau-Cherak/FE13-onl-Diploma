import React, { useState } from "react";

import { Rating } from 'react-simple-star-rating'

import { ExchangeDataType } from "../../types/types";

import './ExchangeCard.scss';

const RatingComponent = Rating;

const ExchangeCard: React.FC<ExchangeDataType> = ({ Name, Country, ItemType, AffiliateURL, Description, TOTALVOLUME24H, Rating }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const itemClickHandler = () => {
    setIsOpen(!isOpen)
  }

  const handleRating = () => {
  }

  return (
    <>
      <div className='exchange-card' onClick={itemClickHandler}>
        <div className='exchange-card_title'>
          <span>{Name}</span>
        </div>
        <span className='exchange-card_volume'>{(TOTALVOLUME24H.BTC).toFixed(2)} BTC</span>
        <div className='exchange-card_type'>
          {
            ItemType.map((item, index) => {
              return <span key={index} className='type'>{item}</span>
            })
          }
        </div>

        <RatingComponent
          onClick={handleRating}
          ratingValue={Rating.Avg*20}
          size={20}
          transition
          fillColor='#185ee0'
          emptyColor='#c0c0c0'
          className='exchange-card_rating'
        />
        {
          isOpen
            ? <div className='exchange_description'>
              < span className='country'>Country: {Country}</span>
              {Description
                ? <div className='description' dangerouslySetInnerHTML={{ __html: Description }}>
                </div>
                : <span>Sorry, description not found.</span>}
              <a className='exchange_link' href={AffiliateURL}>Read more</a>
            </div>
            : null
        }
      </div >
    </>
  )
}

export default ExchangeCard;
