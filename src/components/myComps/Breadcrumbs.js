import { Link } from "react-router-dom";
import back_arrow_icon from "../../svg/back_arrow.svg";
import "./Breadcrumbs.css";

const Breadcrumbs = ({text}) => {


    return ( 
        <div className="col-12 breadcrumbs">
            <p><Link to="/">Главная</Link> <span>/</span> {text}</p>
        </div>
     );
}
 
export default Breadcrumbs;