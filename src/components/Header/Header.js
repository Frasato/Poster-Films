import { Link } from "react-router-dom";
import '../../styles/header.scss';

export default function Header(){
    return(
        <header>
            <Link to='/' className="text">PostersFilms</Link>
            <Link to='/watch-later' className="text">Watch Later</Link>
        </header>
    );
}