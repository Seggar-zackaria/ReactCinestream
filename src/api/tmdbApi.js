import axiosUi from "./axiosUI";

export const category = {
    movie: 'movie',
    tv: 'tv'
}


export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    upcoming: 'upcoming',
    popular: 'popular',
    on_the_air: 'on_the_air'
}


const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosUi.get(url, params)
    },

    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosUi.get(url, params)
    },

    getvideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosUi.get(url, {params: {}})
    },

    search: (cate, params) => {
        const url =  'search/' + category[cate]
        return axiosUi.get(url, params)
    },

    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosUi.get(url, params)
    },

    credits: (cate, id) => {
        const url = category[cate] + id + '/credits';
        return axiosUi.get(url, {params: {}})
    },

    similar: (cate, id) => {
        const url = category[cate] + id + '/similar';
        return axiosUi.get(url, {params: {}})
    },
}


export default tmdbApi