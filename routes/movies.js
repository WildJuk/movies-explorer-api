const router = require('express').Router();
const {
  validateObjectId,
  validateMovieInfo,
} = require('../middlewares/validators');

const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateMovieInfo, addMovie);
router.delete('/:id', validateObjectId, deleteMovie);

module.exports = router;
