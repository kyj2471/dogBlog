import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

const router = express.Router();

router.get('/', (req, res, next) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  let fcm_target_token =
    'dG036TneAp39RvqTlwUDa4:APA91bGWSDEIb3Ad1whyLBGqlzVuJX-_h3l7OPPAvCcg8-eeqqf2T-unnwOlD7hcdcB8Du3vajlZmnLqQubKNbTDYGCF8ruTnFeF_P-lE6AZxWTtugShCkcFR1vA55yvbQbNsw9fFEjs';

  let message = {
    notification: {
      title: '이미지 업로드 성공',
      body: 'test'
    },
    token: fcm_target_token
  };
  admin
    .messaging()
    .send(message)
    .then(function (res) {
      console.log('fcm success', res);
    })
    .catch(function (err) {
      console.log(err);
    });
  return res.send('success');
});

export default router;
