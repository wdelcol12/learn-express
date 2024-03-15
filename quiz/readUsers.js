const express = require('express')
const router = express.Router();

router.get('usernames', (req,res) => {
    let usernames = req.users.map(function(user) {
        return {id: user.id, username: user.username};
    });
    res.send(usernames);
})

router.get('/usernames/:name', (req,res) => {
    let name = req.params.name
    req.users.map(function(user) {
        if (user.username === name) {
          username = user.username
        }
      });
      res.send(username);
})

module.exports = router;