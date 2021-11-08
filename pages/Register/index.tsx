import React, { useEffect, useState } from 'react';
import localforage from 'localforage';
import enableMessaging from '../../hooks/fcmMessage';
import RegisterPageTemplate from '../../components/templates/RegisterPageTemplate';
import firebase from '../../firebase/firebase';

export default function Register() {
  const [token, setToken] = useState<string>('');
  useEffect(() => {
    const messaging = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log(token);
      });
  }, []);
  console.log(token);
  // useEffect(() => {
  //   enableMessaging();
  //   localforage
  //     .getItem('fcm_token')
  //     .then((result: any) => setToken(result))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <>
      <RegisterPageTemplate token={token} />
    </>
  );
}
