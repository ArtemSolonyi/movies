import {Movie} from '../models/Movie'
import {MovieDto} from "./movie.dto";
import {Category} from "../models/Category"

export class MovieService {
    createMovie = async (body: MovieDto) => {
        try {
            const {title, description, category} = body
            const categoryId = await Category.findOne({category:category})
            const movie = await Movie.create({title, description,category:categoryId})
            return {"movie": movie, status: 200}
        } catch (e: any) {
            return e.message
        }
    }

    getMovie = async (id: string) => {

        //const movie = await Movie.findOne({_id: id})
        return {"movie": 's', status: 200}
    }

    updateMovie = async (body: MovieDto) => {
        const {title, description, category} = body
        const movie = Movie.updateOne({title, description, category})
        return {"movie": movie, status: 200}
    }

    deleteMovie = async (id: string) => {
        const movie = await Movie.deleteOne({_id: id})
        if (movie) {
            return {"movies": await Movie.find(), status: 200}
        }
    }
    movieOfCategory = async (body:MovieDto) => {
        return await Category.create({category:body.category})
    }

}



