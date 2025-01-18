 import { messaging, getToken } from './firebaseCon';
 export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: '---' });

    console.log('Token received:', token);
    return token;
  } catch (error) {
    console.error('Error requesting token:', error);
  }
 };
