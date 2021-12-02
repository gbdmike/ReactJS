import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists, gistsSelector, searchGists } from "../store/gists";


//функция высшего порядка, которая возвращает другую функцию
//значительно уменьшает количество вызовов API, отправляемых на сервер
const searchGistsDebounce = debounce((args, dispatch) => {
    dispatch(searchGists(args));
}, 250);

//все запросы выполняются в useEffect
export function GistsPage() {
    const { gists, gistsPending, gistsError, gistsSearch, gistsSearchPending, gistsSearchError } = useSelector(gistsSelector);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGists());
    }, []);

    useEffect(() => {
        dispatch(searchGistsDebounce(value, dispatch));
    }, [dispatch]);

    if (gistsError) {
        return <h1>Error</h1>
    }

    if (gistsSearchError) {
        return <h1>Error</h1>
    }

    return (
        <div style={{ display: "flex" }}>
            <div>
                <h1>Gists</h1>

                {gistsPending ? (
                    <h1>Loading ....</h1>
                ) : (
                    gists.map((gist, index) => <h3 key={index}>{gist.forks_url}</h3>)
                )}
            </div>

            <div>
                <h1>Gists Search</h1>
                <input
                    placeholder="Введите поиск"
                    value={value}
                    onClick={(e) => setValue(e.target.value)}
                />

                {gistsSearchPending ? (
                    <h1>Loading ....</h1>
                ) : (
                    gistsSearch.map((gist, index) => <h3 key={index}>{gist.forks_url}</h3>)
                )}
            </div>
        </div>
    );
}
