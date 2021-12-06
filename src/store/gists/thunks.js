//redux не умеет выполнять асинхронные функции, пожтому все запросы делаются в thunk
//все запросы делаются в thunk, потому что все запросы могут быть асинхронными
//запросы подписки, асинхронные действия

import { gistsStart, gistsSuccess, gistsError } from "./actions";
import { searchGistsStart, searchGistsSuccess, searchGistsError } from "./actions";


export const getGists = 
(page = 1) =>
//1й аргумент dispatch, 2й getState, 3й api (то что пеоедаем в withExtraArgument)
async (dispatch, _, api) => {
    try {
        dispatch(gistsStart());
        const { data } = await api.getGistsApi(page);
        dispatch(gistsSuccess(data));
    } catch (e) {
        dispatch(gistsError(e));
    }
};

export const searchGists = 
(name) =>
//1й аргумент dispatch, 2й getState, 3й api (то что передаем в withExtraArgument)
async (dispatch, _, api) => {
    try {
        dispatch(searchGistsStart());
        const { data } = await api.getGistsApi(name);
        dispatch(searchGistsSuccess(data));
    } catch (e) {
        dispatch(searchGistsError(e));
    }
};
