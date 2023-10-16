const express = require('express');
const router= express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


router.get('/', ctrlLocations.Homepage);
router.get('/locations', ctrlLocations.Locations );
router.get('/about', ctrlLocations.About);
router.get('/contact', ctrlLocations.Contact);
router.get('/register', ctrlLocations.Register);
// post
router.post('/register', ctrlLocations.Register_post)
module.exports = router;
