import express from 'express';
const router = express.Router();

import db from '../../models';

router.get('/', (req, res) => {
  db.map.findAll().then((map) => {
    var locals = { mapList: map };
    res.render('maps/index', locals);
  })
})

export default router