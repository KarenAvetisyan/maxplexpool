import GoBack from "../myComps/GoBack";
import "./LoginWallet.css";
import {Link} from "react-router-dom";

const LoginWallet = () => {
    return ( 
        <section className="sc-login-wallet">
            <div className="container">
                <div className="row">
                   <GoBack text={'Назад'} backUrl={'/'} />
                   <div className="col-12">
                       <div className="login-wallet-box">
                            <h4>Войти</h4>
                            <p>Хотите новый кошелёк? <Link to='/create-wallet'>Создать кошелёк</Link></p>
                            <label className="custom__field">
                                <span>Войти при помощи SEED-фразы:</span>
                                <input type="text" placeholder="Введите SEED-фразу или ключ активации" />
                            </label>
                            <label className="custom__field">
                                <span>Введите пароль для входа в кошелек:</span>
                                <input type="text" placeholder="Пароль" />
                            </label>
                            <Link to="/money-transfer" className="primary__btn">Войти</Link>
                       </div>   
                   </div>
                </div>
            </div>
            <div className="container login-wallet-footer">
                <div className="row">
                    <div className="col-md-6">
                        <p>© 2022  MAXPLEXPOOI Все права защищены.</p>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <p><a href="#">Политика конфиденциальности</a></p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default LoginWallet;