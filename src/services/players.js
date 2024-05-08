const express = require('express');
const router = express.Router();
const playerCollection = require('../models/player');

router.get('/', async (req, res) => {
	const playerList = await playerCollection.find();

	if (!playerList) {
		res.status(500).json({ success: false });
	}
	res.send(playerList);
});

router.post('/', async (req, res) => {
	try {
		const newPlayer = {
			name     : req.body.name,
			alliance : req.body.alliance
		};

		await playerCollection.insertMany(newPlayer);

		const newRegister = await playerCollection.findOne({
			name : req.body.name
		});

		return res.status(201).json({
			success : true,
			message : 'Player successfully registered.',
			name    : newRegister.name
		});
	} catch (error) {
		return res.status(404).json({
			success : false,
			error   : error
		});
	}
});

const playerRouter = router;

module.exports = playerRouter;
