import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api.js";
import Loading from "../../components/Loading/Loading.js";
import { FaCalendarAlt, FaRegStar, FaStar} from "react-icons/fa";

export default function Films(){

    const {id} = useParams();
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function selectedFilm(){
            await api.get(`movie/${id}`, {
                params:{
                    api_key: 'e0abc88156d380bf9979cd93aac04390',
                }
            }).then((response)=>{
                setFilm(response.data);
                setLoading(false);
            })
        }

        selectedFilm();

    },[]);

    if(loading){
        return(
            <Loading/>
        );
    }

    function starsFilm(){
        if(film.vote_average < 1){
            return(
                <>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </>
            )
        }else if(film.vote_average > 1 && film.vote_average < 3 ){
            return(
                <>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </>
            )
        }else if(film.vote_average > 3 && film.vote_average < 6 ){
            return(
                <>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </>
            )
        }else if(film.vote_average > 6 && film.vote_average < 9 ){
            return(
                <>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                </>
            )
        }else if(film.vote_average > 8){
            return(
                <>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </>
            )
        }
    }

    return(
        <div className="film_container">
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="Poster Film"/>
            <h1>{film.title}</h1>
            <p>"{film.overview}"</p>
            <h2><FaCalendarAlt/>{film.release_date}</h2>
            <h2>{film.vote_average} - {starsFilm()}</h2>
            <div className="buttons_container">
                <button>Watch Later</button>
                <button>
                    <a href="#">Whatch Trailer</a>
                </button>

            </div>
        </div>
    );  
}