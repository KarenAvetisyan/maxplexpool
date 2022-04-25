import "./Footer.css";
import Socials from "../myComps/Socials";

const Footer = () => {

    return ( 
        <footer>
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center">
                       <Socials />
                   </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;