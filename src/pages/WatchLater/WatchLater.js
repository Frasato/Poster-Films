import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function WatchLater(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        const getFilms = JSON.parse(localStorage.getItem("@postersfilms"));
        setFilms(getFilms);
    }, []);
    
    function deleteFilm(){
        const deletedFilm = films.find((film)=> film.id !== films.id);
        setFilms(deletedFilm);
        localStorage.setItem("@postersfilms", JSON.stringify(deletedFilm));
    }

    return(
        <>
            {
                films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="Poster Film"/>
                            <h1>{film.title}</h1>
                            <button onClick={deleteFilm}>
                                <MdDelete />
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
}