import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api.js";
import '../../styles/home.scss';

import Loading from '../../components/Loading/Loading.js'

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
            <Loading/>
        );
    }

    return(
        <div className="container">
            <div className="scroll-films">
                {filmsScroll.map((film)=>{
                    return(
                        <div key={film.id}>
                            <Link to={`/film/${film.id}`} className="button">
                                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="Poster Film"/>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="films">
                {films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <Link to={`/film/${film.id}`} className="button">
                                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="Poster Film"/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}