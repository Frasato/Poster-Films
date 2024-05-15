import { Link } from "react-router-dom";
import '../../styles/error.scss';

export default function Error(){
    return(
        <div className="error_container">
            <h1>404</h1>
            <h2>Page not found...</h2>
            <Link to="/" className="films">See all films</Link>
        </div>
    )
}