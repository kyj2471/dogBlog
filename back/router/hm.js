import express from 'express';
import 'express-async-errors';

const router = express.Router();

const aboutProject = {
  title: 'hellomarket mini project',
  subTitle: "van's mission",
  description:
    'chloe, tony hellomarket 주니어들이 1달정도의 시간동안 밴이 주신 미션을 한 결과입니다.'
};

const hmDevMembers = [
  {
    id: '1',
    name: 'van',
    createAt: Date.now().toString(),
    position: 'CTO',
    gender: 'male'
  },
  {
    id: '2',
    name: 'chloe',
    createAt: Date.now().toString(),
    position: 'junior',
    gender: 'female'
  },
  {
    id: '3',
    name: 'tony',
    createAt: Date.now().toString(),
    position: 'junior',
    gender: 'male'
  }
];

//get
router.get('/members', (req, res, next) => {
  res.status(200).json(hmDevMembers);
});

router.get('/intro', (req, res, next) => {
  res.status(200).json(aboutProject);
});

export default router;
