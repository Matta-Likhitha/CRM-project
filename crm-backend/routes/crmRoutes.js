const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');
console.log('Controller contents:', crmController);
// POST: http://localhost:5000/api/crm/users
router.post('/leads', crmController.createUser);

// GET: http://localhost:5000/api/crm/users
router.get('/leads', crmController.getAllUsers);

module.exports = router;