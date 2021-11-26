import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default ({ chatId }) => {
  const params = useParams();
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const chats = useSelector((state) => state.chats.chatList);
  const dispatch = useDispatch();
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);
  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };

  return (
    <>
      <div>
        {Object.keys(chats).map((id, i) => (
          <div key={i}>
            <Link to={`/chats/${id}`}>
              <p style={{ color: id === chatId ? "#000000" : "grey" }}>
                {chats[id].name}
              </p>
            </Link>
          </div>
        ))}
        <span className="add-chat" onClick={handleOpen}>Add Chat</span>
      </div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Enter name</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>Submit</Button>
      </Dialog>
    </>
  );
};
