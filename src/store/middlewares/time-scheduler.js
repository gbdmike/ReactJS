export const timeScheduler = (store) => (next) => (action) => {
    
    //извлекаем на наличие флага action
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }

    const timeoutId = setTimeout(() => {
        return next(action);
    }, action.meta.delay);

    return function cancel() {
        console.log("cancel", timeoutId);
    };
};