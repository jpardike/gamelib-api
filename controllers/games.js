const db = require("../models");

const index = (req, res) => {
  // db.Game.find({})
  //   .then((foundGames) => {
  //     res.json({ games: foundGames });
  //   })
  //   .catch((err) => {
  //     console.log('Error in games.index: ', err);
  //     res.json({ Error: 'Unable to get your data' });
  //   });

  //   console.log('underneath database query');

  db.Game.find({}, (err, foundGames) => {
    if (err) console.log("Error in games#index:", err);

    if (!foundGames.length) {
      return res.json({ message: "No games in the database" });
    }

    res.json({ games: foundGames });

    // res.send("Incomplete games#index controller function");
  });
};

const show = (req, res) => {
  // db.Game.findById(req.params.id)
  // .then((foundGame) => {
  //   res.json({ game: foundGame })
  // })
  // .catch((err) => {
  //   console.log('Error in games.show: ', err);
  //   res.json({ Error: 'Unable to get data' });
  // });

  db.Game.findById(req.params.id, (err, foundGame) => {
    if (err) console.log("Error in games#show:", err);

    res.json({ game: foundGame });
  });
};

const create = (req, res) => {
  // db.Game.create(req.body)
  //   .then((savedGame) => {
  //     res.json({ game: savedGame })
  //   })
  //   .catch((err) => {
  //     console.log('Error in post games.index: ', err);
  //     res.json({ Error: 'Unable to get data' });
  //   })

  db.Game.create(req.body, (err, savedGame) => {
    if (err) console.log("Error in games#create:", err);

    console.log(req.body);

    res.json({ games: savedGame });
  });
};

const update = (req, res) => {
  // db.Game.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   { new: true }
  // )
  //   .then((updatedGame) => {
  //     res.json({ game: updatedGame });
  //   })
  //   .catch((err) => {
  //     console.log('Error in put games.update: ', err);
  //     res.json({ Error: 'Unable to get data' });
  //   });

  db.Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedGame) => {
      if (err) console.log("Error in games#update:", err);

      res.json({ game: updatedGame });
    }
  );
};

const destroy = (req, res) => {
  // db.Game.findByIdAndDelete(req.params.id)
  //   .then((deletedGame) => {
  //     res.json({ game: deletedGame });
  //   })
  //   .catch((err) => {
  //     console.log('Error in put games.update: ', err);
  //     res.json({ Error: 'Unable to get data' });
  //   });

  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) console.log("Error in games#destroy:", err);

    res.json({ game: deletedGame });
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
