import React from "react";

import './NewsCard.scss';

interface NewsCardProps {
    newsName: string;
    newsUrl: string;
    newsDescription: string;
    providerName: string;
    providerUrl: string;
    publishedDate: string;

}

const NewsCard: React.FC<NewsCardProps> = ({ newsName, newsUrl, newsDescription, providerName, providerUrl, publishedDate }) => {
    return (
        <>
            <div className='news-card_header'>
                <span className='header_date'>{publishedDate}</span>
                <span className='header_title'>{providerName}</span>
                <img src={providerUrl} alt={providerName} />
            </div>
            <div className='news-card_body'>
                <span className='body_title'>{newsName}</span>
                <span className='body_description'>{newsDescription}</span>
            </div>
            <a className='outside_link' href={newsUrl}>Read more</a>
        </>
    )
}

export default NewsCard;
