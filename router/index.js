const express = require('express');
const router = express.Router();


const contro = require('../controller/mainServerController');
// There should be require to pass mobile number like this :: "localhost:8000/?mobilenumber=9896979786"
router.get('/',contro.mainServerCont);

module.exports = router;