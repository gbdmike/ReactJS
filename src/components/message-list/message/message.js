import classNames from 'classnames';
import styles from './message.module.css';

export const Message = ({message}) => {
    const date = new Date().toLocaleString() + '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <div className={classNames(styles.message, {
            [styles.messageUser]: message.author === "User",
            [styles.messageBot]: message.author === "Bot"
        })}>
            <h3>{message.author}</h3>
            <p>{message.message}</p>
            <p>{date.toLocaleString(('en-US', options))}</p>
        </div>
    );
};