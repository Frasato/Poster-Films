import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import EmptyList from "../../components/EmptyList/EmpytList";
import '../../styles/watchLater.scss';

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
        <div className="container_saved-films">
            {
                films? films.map((film)=>{
                    return(
                            <div key={film.id} className="film">
                                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="Poster Film"/>
                                <button onClick={() => deleteFilms(film.id)}>
                                    <MdDelete />
                                </button>
                            </div>
                    )
                }) : <EmptyList/>
            }
        </div>
    );
}