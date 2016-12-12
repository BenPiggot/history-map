import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';

import db from '../../models';


router.get("/", (req, res) => {
  res.render("auth/login")
});

router.post("/", (req, res) => {
  db.user.find({ where: { email:req.body.email } })
    .then( (user) => {
      if(user) {
          //check password
        bcrypt.compare(req.body.password, user.password, (err,result) => {
          if(err) throw err;

          if(result) {
              //store user to session!!
            req.session.user = {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            };
            console.log('logged in!');
            // req.flash('success','You have been logged in.');
            res.redirect('/maps');
          }
          else {
            console.log('wrong password');
            // req.flash('danger','Invalid password.');
            res.redirect('/');
          }
        })
      }
      else {
        console.log('no user');
        req.flash('danger','Unknown user.');
        res.redirect('/');
      }
    })
});


router.get("/register", (req, res) => {
  res.render("auth/register")
});

router.post("/register", (req, res) => {
  console.log(req.body)
  db.user.findOrCreate({where: {firstName: req.body.firstName, lastName: req.body.lastName,
    password: req.body.password, email: req.body.email}}).then( (user, created) => {
      console.log('yo')
      user.save().then( () => {
        req.flash('success','Account succesfully created!')
        res.redirect('/');
    })
  }).catch( (error) => {
    if (error) {
      req.flash('danger','Please enter a valid email and password.')
      res.redirect('/')
    }
  })
});

// User log Out
router.get('/logout', (req,res) => {
   delete req.session.user;
   req.flash('info','You are now logged out.');
   res.redirect('/')
});

export default router
