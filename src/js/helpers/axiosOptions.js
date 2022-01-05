export const optionsGetCoins = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        timePeriod: '24h',
        limit: '99',
        offset: '0'
    },
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'dbd484c3camshda218e5f7671c8dp17ca79jsn03298ac7b16b'
    }
};

export const optionsNewsSearch = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
        q: 'Cryptocurrencies',
        safeSearch: 'Moderate',
        textFormat: 'Raw',
        freshness: 'Month',
        mkt: 'en-US',
        count: '20'
    },
    headers: {
        'accept-language': 'en',
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '0060b8ce00mshcdd4cc91e36faefp1f326fjsncf88ec66cf0f'
    }
};

