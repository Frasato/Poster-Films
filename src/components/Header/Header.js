import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to='/'>PostersFilms</Link>
            <Link to='/watch-later'>Watch Later</Link>
        </header>
    );
}