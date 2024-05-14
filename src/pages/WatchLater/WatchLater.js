import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import EmptyList from "../../components/EmptyList/EmpytList";

export default function WatchLater(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        const getFilms = JSON.parse(localStorage.getItem("@postersfilms"));
        setFilms(getFilms);
    }, []);

    function deleteFilms(id){
        const newFilms = films.filter(film => film.id !== id);
        setFilms(newFilms);
        localStorage.setItem("@postersfilms", JSON.stringify(newFilms));
    }

    return(
        <>
            {
                films? films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="Poster Film"/>
                            <h1>{film.title}</h1>
                            <button onClick={() => deleteFilms(film.id)}>
                                <MdDelete />
                            </button>
                        </div>
                    )
                }) : <EmptyList/>
            }
        </>
    );
}