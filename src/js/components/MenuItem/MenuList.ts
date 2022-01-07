import HomeImage from '../../../image/home.svg';
import CryptocurrenciesImage from '../../../image/cyrrencies.svg';
import ExchangesImage from '../../../image/exchange.svg';
import NewsImage from '../../../image/news.svg';

import { menuListType } from '../../types/types';

const menuList: menuListType[] = [
    {
        title: 'Home',
        path: '/',
        image: HomeImage
    },
    {
        title: 'Cryptocurrencies',
        path: '/Cryptocurrencies',
        image: CryptocurrenciesImage
    },
    {
        title: 'Exchanges',
        path: '/Exchanges',
        image: ExchangesImage
    },
    {
        title: 'News',
        path: '/News',
        image: NewsImage
    },
];

export default menuList; 
