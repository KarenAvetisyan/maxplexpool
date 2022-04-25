import "./Header.css";
import logo from "../../logo.svg";
import login_icon from "../../svg/login_icon.svg";
import burger_icon from "../../svg/burger_icon.svg";
import burger_close from "../../svg/burger_close.svg";
import { useState } from "react";
import LangDropdown from "../myComps/LangDropdown";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

    const [showMobMenu, setShowMobMenu] = useState(false);

    const handleMobMenu = () => {
        setShowMobMenu(!showMobMenu)
    }

    const history = useHistory();

    return ( 
        <header>
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-3 col-5">
                        <div className="h-left">
                            <div className="logo"><a href="#"><img src={logo} alt="" /></a></div>
                        </div>
                    </div>
                    
                    <div className={showMobMenu ? "col-lg-4 col-md-6 mob-menu show" : "col-lg-4 col-md-6 mob-menu" }>
                        <div className="h-middle">
                            {
                                history.location.pathname !== "/login-wallet" && history.location.pathname !== "/create-wallet" &&
                               <>
                                    <Link to="/wallet" className={ history.location.pathname == "/wallet" && "active"} onClick={() => setShowMobMenu(false)}>Кошелек</Link>
                                    <Link to="/money-transfer" className={ history.location.pathname == "/money-transfer" && "active"} onClick={() => setShowMobMenu(false)}>Сделать Перевод</Link>
                                    <button className="close-menu" onClick={() => setShowMobMenu(false)}><img src={burger_close} alt="" /></button>
                               </>
                            }
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-7">
                        <div className="h-right">
                            <LangDropdown />
                            {history.location.pathname !== "/login-wallet" && history.location.pathname !== "/create-wallet" &&
                                <div className="login">
                                    <Link to="/">
                                        <span className="login-icon"><img src={login_icon} alt="" /></span>
                                        Выход
                                    </Link>
                                </div>
                            }
                            {history.location.pathname !== "/login-wallet" && history.location.pathname !== "/create-wallet" &&
                                <button className="btn burger-mob" onClick={handleMobMenu}>
                                    <img src={burger_icon} alt="" />
                                </button>
                            }
                        </div>
                    </div>

                    <div className={showMobMenu ? "overlay open" : "overlay" } onClick={() => setShowMobMenu(false)}></div>
                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;