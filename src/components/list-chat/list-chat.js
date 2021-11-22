import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import { List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import styles from './list-chat.module.css';

// export const ListChat = () => {
//   const [chats] = useState(["Chat1", "Cha2", "Chat3"]);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   return (
//     <List component="nav">
//       {chats.map((chat, index) => (
//       <Chat
//         key={chat}
//         title={chat}
//         selected={selectedIndex === index}
//         handleListItemClick={() => setSelectedIndex(index)}
//         />
//   ))}
//     </List>
//   );
// }

export function ListChat() {
  const [chats] = useState(["Chat1", "Chat2", "Chat3"]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const params = useParams();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // <Chat title={chat} selected={params.roomId === chat} />

  return (
    
      <List component="nav">
        {chats.map((event, index) => (
        <ListItemButton
        key={event}
        title={event}
        selected={params.roomId === event}
        // selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
        >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <div>
          <ListItemText primary={event} />
        </div>
        </ListItemButton>
      ))}
    </List>
  );
}
