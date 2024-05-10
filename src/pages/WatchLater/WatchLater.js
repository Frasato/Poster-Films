import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function WatchLater(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        const getFilms = JSON.parse(localStorage.getItem("@postersfilm"));
        setFilms(getFilms);
    }, []);
    
    return(
        <>
            {
                films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="Poster Film"/>
                            <h1>{film.title}</h1>
                            <button>
                                <MdDelete />
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
}