import React from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseCon = {
    apiKey: "bmbmbm-", 
    authDomain: "--4e53c..com", 
    projectId: "news-app-", 
    messagingSenderId: "123455", 
    appId: "1:"
};

const app = initializeApp(firebaseCon);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
