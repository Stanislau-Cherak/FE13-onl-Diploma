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
                <img src={newsImage} alt='' />
            </div>
            <div className='news-card_body'>
                <span className='body_title'>Time: </span>
                <span className='body_description'>{publishedDate}</span>
                <div className='body_provider'>
                    <span className='provider_title'>Provider:</span>
                    <span className='body_title'>{providerName}</span>
                </div>
                <span className='body_title news-main_title'>{newsName}</span>
                <span className='body_description'>{newsDescription}</span>
            </div>
            <a className='outside_link' href={newsUrl}>Read more</a>
        </div>
    )
}

export default NewsCard;
