import { Link } from "react-router-dom";
import back_arrow_icon from "../../svg/back_arrow.svg";
import "./GoBack.css";

const GoBack = ({text, backUrl}) => {


    return ( 
        <div className="col-12 go-back">
            <Link to={backUrl}><img src={back_arrow_icon} alt="" /> {text}</Link>              
        </div>
     );
}
 
export default GoBack;