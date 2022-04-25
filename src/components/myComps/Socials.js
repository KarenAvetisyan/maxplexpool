import './Socials.css';
import insta_icon from "../../svg/instagram.svg"

const Socials = () => {
    return ( 
        <div className='comp-socials'>
            <div className="soc-icons">
                <a href="#"><img src={insta_icon} alt="" /></a>
                <a href="#"><img src={insta_icon} alt="" /></a>
                <a href="#"><img src={insta_icon} alt="" /></a>
                <a href="#"><img src={insta_icon} alt="" /></a>
            </div>
            <p>Copyright © 2022 MAXPLEXPOOI</p>
            <p><a href="#">Политика конфиденциальности</a></p>
        </div>
     );
}
 
export default Socials;