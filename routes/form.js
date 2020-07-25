const router = require('express').Router();
let Form = require('../models/form.model.js');


router.route('/').get((req, res) => {
  Form.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const phone = Number(req.body.phone);
  const email = req.body.email;
  const msg = req.body.msg;

  const newForm = new Form({
    name,
    phone,
    email,
    msg,
  });

  newForm
    .save()
    .then(() => res.json('data added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;