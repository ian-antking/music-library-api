const Artist = require('../models/artist');

exports.addArtist = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist.toObject());
  });
};

exports.list = (req, res) => {
  Artist.find({}, (error, artists) => {
    res.status(200).json(artists);
  });
};

exports.findById = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.update = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.set(req.body);
      artist.save().then(() => {
        res.status(200).json(artist);
      });
    }
  });
};

exports.delete = (req, res) => {
  Artist.findByIdAndDelete(req.params.id, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(204).json(artist);
    }
  });
};
