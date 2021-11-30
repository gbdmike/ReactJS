import classNames from "classnames";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { withCounter } from "../../../hocs/with-counter";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

export const Message = withCounter(({ message, count, decrement, increment }) => {
  const date = new Date().toLocaleString() + '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();
    const { roomId } = useParams();

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: message.author === "User",
        })}
      >
        <h3>{message.message}</h3>
        <p>{message.author}</p>
        <p>{date.toLocaleString(('en-US', options))}</p>
        <Button onClick={() => dispatch(deleteMessage(message.id, roomId))}>Del</Button>
      </div>
    );
  }
);