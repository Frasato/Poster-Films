import { BiSolidCameraMovie } from "react-icons/bi";
import '../../styles/emptyList.scss';

export default function EmptyList(){
    return(
        <div className="list">
            <BiSolidCameraMovie className="icon"/>
            <h1>Save films to watch later...</h1>
        </div>
    );
}