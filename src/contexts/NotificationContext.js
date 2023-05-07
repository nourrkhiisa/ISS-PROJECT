import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  const value = useMemo(
    () => ({ notification, showNotification }),
    [notification, showNotification]
  );

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}
NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
