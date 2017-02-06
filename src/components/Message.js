import React from 'react';
import styles from './Message.css';

const Message = (props) => (
  <div className={styles.app}>
    <h2>Hello, {props.name}.</h2>
  </div>
);

export default Message;
