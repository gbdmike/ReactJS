

import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

//с помощью ref полуаем доступ к таблице, child к дочернему элементу объекта
//если в value не будет совпадения, он автоматически создаст эту запись
export const updateConversationsApi = (value, roomId) =>
  db.ref("conversations").child(roomId).update({ value, title: roomId });

// @TODO сделать санк, удаление комнаты и сообщений из БД
export const addConversation = (value) => {
  return db.ref("conversations").child(value).set({ title: value, value: "" });
};