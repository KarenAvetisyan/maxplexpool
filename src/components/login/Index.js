import coin from '../../images/coin.png';
import logo from '../../logo.svg';
import LangDropdown from '../myComps/LangDropdown';
import Socials from '../myComps/Socials';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <section className="sc-login">
            <div className="info-left">
                <div className="w-100 text-center">
                    <div className="img-box">
                        <img src={coin} alt="" />
                    </div>
                </div>
                <div className="text-info">
                    <h1>Добро пожаловать<br/> в MaxPlexpooI</h1>
                    <p>Присоединяйтесь к самому перспективному финтех-проекту и получайте доход от ежедневного использования, обмена и хранения цифровых активов уже сегодня</p>
                </div>
            </div>
            <div className="info-right">
                <div className="small-header">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <LangDropdown />
                </div>
                <div className="wallet-info">
                    <Link to={'/login-wallet'}>Войти в кошелек</Link>
                    <Link to={'/create-wallet'}>Cоздать кошелек</Link>
                </div>
                <div className="social-info">
                    <Socials />
                </div>
            </div>
        </section>
     );
}
 
export default Login;