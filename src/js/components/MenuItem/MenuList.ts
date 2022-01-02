const HomeImage = require('../../../image/home.svg') as string;
const CryptocurrenciesImage = require('../../../image/cyrrencies.svg') as string;
const ExchangesImage = require('../../../image/exchange.svg') as string;
const NewsImage = require('../../../image/news.svg') as string;

interface menuListTypes {
    title: string;
    path: string;
    image: any;
}

const menuList: menuListTypes[] = [
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
