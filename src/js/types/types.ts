export type menuListType = {
    title: string;
    path: string;
    image: string;
}

type StatsCoinsType = {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

type LinkType = {
    name: string;
    url: string;
    type: string;
}

type SupplyType = {
    confirmed: boolean;
    circulating: string;
    total: string;
}

type allTimeHighType = {
    price: string;
    timestamp: number;
}

export type CoinType = {
    uuid: string;
    symbol: string;
    name: string;
    color: string
    iconUrl: string
    marketCap: string;
    price: string;
    btcPrice: string;
    listedAt: number;
    change: string;
    rank: number;
    sparkline: string[];
    coinrankingUrl: string;
    '24hVolume': string;
}

export type CoinBigType = {
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    websiteUrl: string;
    links: LinkType[];
    supply: SupplyType;
    "24hVolume": string;
    marketCap: string;
    price: string;
    btcPrice: string;
    change: string;
    rank: number;
    numberOfMarkets: number;
    numberOfExchanges: number;
    sparkline: string[];
    allTimeHigh: allTimeHighType;
    coinrankingUrl: string;
}

export type DataCoinsType = {
    stats: StatsCoinsType;
    coins: CoinType[];
}

type DataCoinType = {
    coin: CoinBigType;
}

type ExchangesTotalVolumeType={
    BTC: number;
}

type ExchangesDisplayTotalVolumeType={
    BTC: string;
}

type RatingType = {
    Avg: number;
    Five: number;
    Four: number;
    One: number;
    Three: number;
    TotalUsers: number;
    Two: number;
}

type GradePointsSplitType = {
    AssetQualityAndDiversity: string;
    DataProvision: string;
    KYCAndTransactionRisk: string;
    Legal: string;
    MarketQuality: string;
    NegativeReportsPenalty: string;
    Security: string;
    Team: string;
}

export type ExchangeDataType = {
    Id: string;
    Name: string;
    Url: string;
    LogoUrl: string;
    ItemType: string[];
    CentralizationType: string;
    InternalName: string;
    GradePoints: number;
    Grade: string;
    GradePointsSplit: GradePointsSplitType;
    AffiliateURL: string;
    Country: string;
    OrderBook: boolean;
    Trades: boolean;
    Description: string;
    FullAddress: string;
    Fees: string;
    FepositMethods: string;
    WithdrawalMethods: string;
    Sponsored: boolean
    Recommended: boolean;
    Rating: RatingType;
    SortOrder: string;
    TOTALVOLUME24H: ExchangesTotalVolumeType;
    DISPLAYTOTALVOLUME24H: ExchangesDisplayTotalVolumeType;
}

type CoinHistoryType = {
    price: string;
    timestamp: number;
}

export type CoinHistoryDataType = {
    change: number;
    history: CoinHistoryType[];
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
    Response: string;
    Message: string
    HasWarning: boolean
    Type: number
    RateLimit: number;
    Data: ExchangeDataType[];
}

export interface CoinHistoryResponce {
    status: string;
    data: CoinHistoryDataType;
}