import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";
import { SEARCH_GISTS_START, SEARCH_GISTS_SUCCESS, SEARCH_GISTS_ERROR } from "./types";


const initialState = {
  gists: [],
  gistsPending: false,
  gistsError: null,

  gistsSearch: [],
  gistsSearchPending: false,
  gistsSearchError: null,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return {
        ...state,
        //меняем флаг запроса на true, что запрос пошел
        gistsPending: true,
        //на начало запроса, скидываем ошибку на null
        gistsError: null,
      };

      case GET_GISTS_SUCCESS:
      return {
        ...state,
        //когда завершился запрос, перекидываем флаг в false
        gistsPending: false,
        //перекидываем данные в глобальное состояние
        gists: action.payload,
      };

    case GET_GISTS_ERROR:
      return {
        ...state,
        //если завершился запрос с ошибкой, перекидываем флаг в false
        gistsPending: false,
        //показываем ошибку
        gistsError: action.payload,
      };

      case SEARCH_GISTS_START:
      return {
        ...state,
        //меняем флаг запроса на true, что запрос пошел
        gistsSearchPending: true,
        //на начало запроса, скидываем ошибку на null
        gistsSearchError: null,
      };

      case SEARCH_GISTS_SUCCESS:
      return {
        ...state,
        //когда завершился запрос, перекидываем флаг в false
        gistsSearchPending: false,
        //перекидываем данные в глобальное состояние
        gistsSearch: action.payload,
      };

      case SEARCH_GISTS_ERROR:
      return {
        ...state,
        //если завершился запрос с ошибкой, перекидываем флаг в false
        gistsSearchPending: false,
        //показываем ошибку
        gistsSearchError: action.payload,
      };

      default:
        return state;
  }
};