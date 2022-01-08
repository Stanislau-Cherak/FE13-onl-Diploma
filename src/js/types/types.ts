export type menuListType = {
    title: string;
    path: string;
    image: string;
}

type StatsCoinsType = {
    total: number;
    offset: number;
    limit: number;
    order: string;
    base: string;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

type BaseType = {
    symbol: string;
    sign: string;
}

type LinkType = {
    name: string;
    url: string;
    type: string;
}

type allTimeHighType = {
    price: string;
    timestamp: number;
}

export type CoinType = {
    id: number;
    uuid: string;
    slug: string;
    symbol: string;
    name: string;
    description: string;
    color: string
    iconType: string
    iconUrl: string
    websiteUrl: string
    socials: LinkType[];
    links: LinkType[];
    confirmedSupply: boolean;
    numberOfMarkets: number;
    numberOfExchanges: number;
    type: string;
    volume: number;
    marketCap: number;
    price: string;
    circulatingSupply: number;
    totalSupply: number;
    approvedSupply: boolean;
    firstSeen: number;
    listedAt: number;
    change: number;
    rank: number;
    history: string[];
    allTimeHigh: allTimeHighType;
    penaltu: boolean;
}

export type DataCoinsType = {
    stats: StatsCoinsType;
    base: BaseType;
    coins: CoinType[];
}

type DataCoinType = {
    base: BaseType;
    coin: CoinType;
}

type CurrenciesType = {
    iconUrl: string;
    id: number;
    name: string;
    sign: string;
    symbol: string;
    type: string;
    uuid: string;
}

export type ExchangeType = {
    description: string;
    iconUrl: string;
    id: number;
    lastTickerCreatedAt: number;
    marketShare: number;
    name: string;
    numberOfMarkets: number;
    rank: number;
    uuid: string;
    verified: boolean;
    volume: number;
    websiteUrl: string;
}

type StatsExchangesType = {
    limit: number;
    offset: number;
    total: number;
    volume: number;
}

type DataExchangesType = {
    currencies: CurrenciesType[];
    exchanges: ExchangeType[];
    stats: StatsExchangesType;
}

type CoinHistoryType={
    price:string;
    timestamp:number;
}

export type CoinHistoryDataType={
    change:number;
    history:CoinHistoryType[];
}

export interface CoinsResponce {
    status: string;
    data: DataCoinsType;
}

export interface CoinResponce {
    status: string;
    data: DataCoinType;
}

export interface ExchangesResponce {
    status: string;
    data: DataExchangesType;
}

export interface CoinHistoryResponce {
    status:string;
    data: CoinHistoryDataType;
}