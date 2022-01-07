type StatsType = {
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

type LinkType={
    name:string;
    url:string;
    type:string;
}

type allTimeHighType={
    price:string;
    timestamp:number;
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
    penaltu:boolean;
}

export type DataCoinsType={
    stats: StatsType;
    base: BaseType;
    coins: CoinType[];
}

type DataCoinType={
    base: BaseType;
    coin:CoinType;
}

export interface CoinsResponce {
    status: string;
    data: DataCoinsType;
}

export interface CoinResponce {
    status: string;
    data: DataCoinType;
}

export type menuListType = {
    title: string;
    path: string;
    image: string;
}