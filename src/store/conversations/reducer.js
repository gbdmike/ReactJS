import { DELETE_CONVERSATION } from "../types";
import { 
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR
} from "./types";

const initialState = {
  conversationsLoading: false,
  conversationsError: null,

  conversations: [],
};

// сделать удаление комнаты
 //удаление комнаты / нужно удалить полностью объект, можно удалить методом delete.%имя const%.id
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
        //для удаления элемента из массива используем метод filter
        //фильтруем все беседы
        conversations: state.conversations.filter(
          //проверяем и возвращаем те беседы, названия которых не равно переданному id
          (conversation) => conversation.title !== action.payload
        )
      };

      case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [
          //через спред копируем старые комнаты
          ...state.conversations,
          //в конец массива добавляем новую комнату
          { title: action.payload, value: "" },
        ],
      };

      case GET_CONVERSATIONS:
        return {
          ...state,
          conversationsLoading: true,
          conversationsError: null,
        };

        case GET_CONVERSATIONS_SUCCESS:
        return {
          ...state,
          conversationsLoading: false,
          conversations: action.payload,
        };

        case GET_CONVERSATIONS_ERROR:
        return {
          ...state,
          conversationsLoading: false,
          conversationsError: action.payload,
        };
    default:
      return state;
  }
};
