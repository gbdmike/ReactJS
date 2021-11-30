import { HANDLE_CHANGE_MESSAGE_VALUE, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversations: [
    {
      title: "room1",
      value: "",
    },
    {
      title: "room2",
      value: "",
    },
    {
      title: "room3",
      value: "",
    },
  ],
};

// сделать удаление комнаты
//удаление комнаты / нужно удалить полностью объект, можно удалить методом delete.%имя const%.id
// сделать по аналогии с удалением сообщений
export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
          ? {...conversation, value: action.payload.value}
          : conversation;
        }),
      };

      case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };
    default:
      return state;
  }
};