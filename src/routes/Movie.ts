import express from 'express';
import controller from '../controllers/Movie';

const router = express.Router();

router.get('/get/:movieId', controller.getMovieById);
router.get('/get/', controller.getMovies);

export = router;