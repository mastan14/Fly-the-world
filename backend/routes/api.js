const express = require('express');
const router = express.Router();
const apiLocations = require('../controllers/apilocations')

router.get('/', apiLocations.Homepage);
router.get('/locations', apiLocations.Locations );
router.get('/about', apiLocations.About);
router.get('/contact', apiLocations.Contact);
router.get('/register', apiLocations.Register);
// post
router.post('/register', apiLocations.Register_post)

module.exports = router;