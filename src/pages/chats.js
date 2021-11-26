import { Routes, Route } from "react-router-dom";
import { Layout, ListChat, MessageList } from "../components";

export const ChatPage = () => {
    
    return (
        <>
        <Routes>
            <Route
                path="/:roomId"
                element={
                <Layout 
                    chats={<ListChat />}
                    messages={<MessageList />}
                />}
            />
        </Routes>
        </>
    );
};