import { request } from "./request";

//все запросы мы делаем через единый класс request
export const getGistsApi = (page) => request.get(`/gists/public?page=${page}`);

export const searchGistsApi = (user) => request.get(`/users/${user}/gists/`);