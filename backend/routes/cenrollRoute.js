const express = require('express');
const router = express.Router();
const cenrollController = require('../controller/cenrollController.js');


router.post('/create-cenroll',cenrollController.createEnrollment);
router.get('/get-cenroll',cenrollController.getEnrollment);
router.put('/update-cenroll/:id',cenrollController.updateEnrollment);
router.delete('/delete-cenroll/:id',cenrollController.deleteEnrollment);

module.exports = router;