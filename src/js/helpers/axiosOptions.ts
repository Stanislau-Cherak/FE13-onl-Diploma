import { AxiosRequestConfig } from "axios";

export const axiosOptionsCoins: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'a2ef67004dmsh3f5cf4586a1a877p124c0ajsn2d84250d8a19'
    }
}

export function getAxiosOptionsCoin(id: number): AxiosRequestConfig  {
    return {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'a2ef67004dmsh3f5cf4586a1a877p124c0ajsn2d84250d8a19'
        }
    }
}

export function getAxiosOptionsNews(count: number, q: string): AxiosRequestConfig {
    return {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
            q: q,
            safeSearch: 'Moderate',
            textFormat: 'Raw',
            freshness: 'Month',
            mkt: 'en-US',
            count: `${count}`
        },
        headers: {
            'accept-language': 'en',
            'x-bingapis-sdk': 'true',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
            'x-rapidapi-key': '0060b8ce00mshcdd4cc91e36faefp1f326fjsncf88ec66cf0f'
        }
    }
}
