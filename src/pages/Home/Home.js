import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";

export default function Home(){
    
    const [films, setFilms] = useState([]);
    const [filmsScroll, setFilmsScroll] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilms(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: 'e0abc88156d380bf9979cd93aac04390',
                    page: 1
                }
            });

            setFilms(response.data.results.slice(7, 20));
            setFilmsScroll(response.data.results.slice(0, 6));
        }

        loadFilms();
        setLoading(false);
    },[]);

    if(loading){
        return(
            <div className="loading">
                <h2>Loading Films...</h2>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="scrollFilms">
                {filmsScroll.map((film)=>{
                    return(
                        <div key={film.id}>
                            <h1>{film.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="Poster Film"/>
                            <Link to={`/film/${film.id}`}>Watch</Link>
                        </div>
                    )
                })}
            </div>
            <div className="films">
                {films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <h1>{film.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="Poster Film"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}