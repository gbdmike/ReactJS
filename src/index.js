import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom'; //ReactDOM берет наше приложение и вставляет его в страницу
import { ChatPage, ProfilePage } from "./pages";
import { Title } from "./components";


const light = createTheme({
  theme: {
      color: "green"
  },
});
const dark = createTheme({
  theme: {
      color: "darkgrey"
  },
});

// ReactDOM.render(
//   <ThemeProvider theme={light}>
//     <Layout
//       title = {<Title />}
//       chat = {<ListChat />}
//       messages={<MessageList />}
//     />
//   </ThemeProvider>,
//   document.getElementById('root'));

ReactDOM.render(
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Title />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/chats/*" element={<ChatPage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
  </BrowserRouter>
</ThemeProvider>,
document.getElementById('root'));