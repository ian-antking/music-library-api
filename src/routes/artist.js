const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.addArtist);
router.get('/', artistController.list);
router.get('/:id', artistController.findById);
router.patch('/:id', artistController.update);

module.exports = router;
