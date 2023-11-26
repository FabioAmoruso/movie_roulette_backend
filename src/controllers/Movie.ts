import { NextFunction, Request, Response } from "express";
import Movie from "../models/Movie";

/** Get a movie from MongoDB */
const getMovieById = (req: Request, res: Response, next: NextFunction) => {
    const movieId = req.params.movieId;

    return Movie.findById(movieId)
        .then(movie => movie ? res.status(200).json({ movie }) : res.status(404).json({
            message: 'Movie not found'
        }))
        .catch(error => res.status(500).json({ error }));
};

/** Get all movies from MongoDB */
const getMovies = (req: Request, res: Response, next: NextFunction) => {
    return Movie.find()
        .then(movie => res.status(200).json({ movie }))
        .catch(error => res.status(500).json({ error }));
};

export default { getMovieById, getMovies };