import { useEffect, useState } from "react";

export default function WatchLater(){
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        const getFilms = JSON.parse(localStorage.getItem("@postersfilm"));
        setFilms([...films, ...getFilms]);
    }, []);
    
    return(
        <>
            {
                films.map((film)=>{
                    return(
                        <div key={film.id}>
                            <h1>{film.title}</h1>
                        </div>
                    )
                })
            }
        </>
    );
}