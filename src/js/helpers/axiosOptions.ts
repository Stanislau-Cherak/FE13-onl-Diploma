import { AxiosRequestConfig } from "axios";

export function getAxiosOptionsCoins(number: number): AxiosRequestConfig {
    return {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            tiers: '1',
            limit: `${number}`,
            offset: '0'
        },
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '0060b8ce00mshcdd4cc91e36faefp1f326fjsncf88ec66cf0f'
        }
    }
}

export const axiosOptionsExchanges: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://min-api.cryptocompare.com/data/exchanges/general',
    headers: {
        'authorization': 'Apikey {df7360df74b05ca444b47b782e73a95f95e11989d7f6f9b945b3353e693bd4fa}'
    }
}

export function getAxiosOptionsCoin(uuid: string): AxiosRequestConfig {
    return {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h'
        },
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '0060b8ce00mshcdd4cc91e36faefp1f326fjsncf88ec66cf0f'
        }
    }
}

export function getAxiosOptionsCoinHistory(uuid: string, time: string): AxiosRequestConfig {
    return {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: time
        },
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '0060b8ce00mshcdd4cc91e36faefp1f326fjsncf88ec66cf0f'
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
            offset: '10',
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
