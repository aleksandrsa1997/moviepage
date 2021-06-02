import {TFilter, TSortBy} from "../store/commonTypes";

export const arrSort: Array<TSortBy> = [
    { title: 'revenue'},
    { title: 'popularity'},
    { title: 'vote_average'},
    { title: 'release_date'},
]

export const discoverKeys: TFilter = {
    revenue: 'revenue.desc',
    popularity: 'popularity.desc',
    vote_average: 'vote_average.desc',
    release_date: 'release_date.desc',
}