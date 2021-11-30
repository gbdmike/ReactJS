import { sendMessage } from "./actions";
import { handleChangeMessageValue } from "../conversations";


export const sendMessageWithBot = (message, roomId) => (dispatch, getState) => {
    dispatch(sendMessage({ author, message }, roomId));
    dispatch(handleChangeMessageValue("", roomId));

    if (message.author === "User") {
        setTimeout(() => {
            dispatch(
                sendMessage({ author: "Bot", message: "Hello I'm bot thunk" }, roomId)
            );
        }, 500);
    }
};