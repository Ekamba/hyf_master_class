import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState(false);
  const [text, setText] = useState("Order completed successfully");

  const createNotification = (e) => {
    e.preventDefault();
    setText(text);
    setNotifications(true);
  };

  return {
    notifications,
    createNotification,
    setText,
    text,
    setNotifications,
  };
}

export default useNotifications;
