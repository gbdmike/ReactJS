export const createStore = (initialState, reducer) => {
    let currentState = initialState;
    //listeners будет заполняться через subscribe
    const listeners = [];

    const getState = () => currentState;
    const subscribe = (listener) => listeners.push(listener);
    const dispatch = (action) => {
        currentState = reducer(currentState, action);

        listeners.forEach((listener) => listener());
        return action;
    };

    return {getState, subscribe, dispatch};
}