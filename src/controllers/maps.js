import express from 'express';
const router = express.Router();

import db from '../../models';

router.get('/', (req, res) => {
  res.render('maps/index')
})

export default router