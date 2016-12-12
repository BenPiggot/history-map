import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';

import db from '../../models';


router.get("/", (req, res) => {
    res.render("auth/login")
});


router.get("/register", (req, res) => {
    res.render("auth/register")
});

router.post("/register", (req, res) => {
    console.log('nothing happens yet')
});

export default router
