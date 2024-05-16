import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api.js";
import Loading from "../../components/Loading/Loading.js";
import { FaCalendarAlt, FaRegStar, FaStar} from "react-icons/fa";
import { toast } from "react-toastify";
import '../../styles/film.scss';

export default function Films(){

    const {id} = useParams();
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(()=>{
        async function selectedFilm(){
            await api.get(`movie/${id}`, {
                params:{
                    api_key: 'e0abc88156d380bf9979cd93aac04390',
                }
            }).then((response)=>{
                setFilm(response.data);
                setLoading(false);
            }).catch(()=>{
                navigation("*", {replace: true});
            });
        }

        selectedFilm();

    },[id, navigation]);

    function saveFilm(){
        const getFilms = localStorage.getItem("@postersfilms");
        let savedFilms = JSON.parse(getFilms) || [];
        const hasFilm = savedFilms.some((allSavedFilms)=> allSavedFilms.id === film.id);

        if(hasFilm){
            toast.warn("Film already exist...");
            return;
        }else{
            savedFilms.push(film);
            localStorage.setItem("@postersfilms", JSON.stringify(savedFilms));
            toast.success("Sucess to save");
        }
    }

    if(loading){
        return(
            <Loading/>
        );
    }

    function starsFilm(){
        if(film.vote_average <= 1){
            return(
                <>
                    <FaStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                </>
            )
        }else if(film.vote_average > 1 && film.vote_average < 3 ){
            return(
                <>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                </>
            )
        }else if(film.vote_average > 3 && film.vote_average < 6 ){
            return(
                <>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaRegStar className="icon"/>
                    <FaRegStar className="icon"/>
                </>
            )
        }else if(film.vote_average > 6 && film.vote_average < 9 ){
            return(
                <>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaRegStar className="icon"/>
                </>
            )
        }else if(film.vote_average > 8){
            return(
                <>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                </>
            )
        }
    }

    return(
        <div className="film_container">
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="Poster Film"/>
            <h1>{film.title}</h1>
            <p>"{film.overview}"</p>
            <h2><FaCalendarAlt className="icon"/>{film.release_date}</h2>
            <h2>{starsFilm()}</h2>
            <div className="buttons_container">
                <button onClick={saveFilm}>Watch Later</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${film.title}`} rel="noreferrer" target="blank">Trailer</a>
                </button>
            </div>
        </div>
    );  
}