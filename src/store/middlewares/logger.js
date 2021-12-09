export const logger = (state) = (next) = (action) => {
    console.log("dispatching", action);
    console.log("prev state", store.getState());
    
    //next делает запуск к след. элементу цепочки
    const result = next(action);

    console.log("next state", store.getState());
    return result;

};
