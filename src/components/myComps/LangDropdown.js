
import worldwide from "../../svg/worldwide.svg";
import './LangDropdown.css';

const LangDropdown = () => {
    return ( 
        <div className="langs">
            <div className="lang-icon">
                <img src={worldwide} alt="" />
            </div>
            <div className="lang-dropdown">
                <span>RU</span>
                <ul>
                    <li><a href="#">RU</a></li>
                    <li><a href="#">EN</a></li>
                    <li><a href="#">AM</a></li>
                </ul> 
            </div>
        </div>
     );
}
 
export default LangDropdown;