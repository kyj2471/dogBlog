import firebase from 'firebase';
import localforage from 'localforage';

const enableMessaging = async () => {
  if (typeof window !== 'undefined') {
    await import('firebase/messaging');
    if (firebase.messaging.isSupported()) {
      try {
        if ((await localforage.getItem('fcm_token')) !== null) {
          return false;
        }
        await Notification.requestPermission();
        console.log(firebase.apps);
        const token = await firebase.messaging().getToken({
          vapidKey:
            'BAJqCIUSHEtWp302UmCHdJLKuJHN7vHmEHC_x4Qh0gGkkQf3MwKnhWUn-OvQ-zrcsmA-pMyqWYk8_x84nOKUrUs'
        });
        localforage.setItem('fcm_token', token);
      } catch (error) {
        console.log(error);
        throw 'firebase error';
      }
    }
  }
};

export default enableMessaging;
