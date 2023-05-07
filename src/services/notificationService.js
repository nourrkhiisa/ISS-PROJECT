import { v4 as uuidv4 } from "uuid";

const notificationService = {
  createNotification: (type, message) => ({
    id: uuidv4(),
    type,
    message,
  }),

  addNotification: (notifications, notification) => [...notifications, notification],

  removeNotification: (notifications, notificationId) =>
    notifications.filter((notification) => notification.id !== notificationId),
};

export default notificationService;
