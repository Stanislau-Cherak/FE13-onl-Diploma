import React from "react";

import './NewsCard.scss';

interface NewsCardProps {
    newsName: string;
    newsUrl: string;
    newsDescription: string;
    newsImage: string;
    providerName: string;
    publishedDate: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsName, newsUrl, newsDescription, newsImage, providerName, publishedDate }) => {
    return (
        <div className='news-card'>

            <div className='news-card_header'>
                <img src={newsImage} alt={newsName} />
            </div>

            <div className='news-card_body'>

                <div className='time'>
                    <span className='time_title'>Time:</span>
                    <span className='time_description'>{publishedDate}</span>
                </div>

                <div className='provider'>
                    <span className='provider_title'>Provider:</span>
                    <span className='provider_description'>{providerName}</span>
                </div>

                <div className='news-main'>
                    <span className='news-main_title'>{newsName}</span>
                    <span className='news-main_description'>{newsDescription}</span>
                </div>
               
            </div>
            <a className='outside_link' href={newsUrl}>Read more</a>
        </div>
    )
}

export default NewsCard;
