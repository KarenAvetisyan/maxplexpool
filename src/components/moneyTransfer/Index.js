import Breadcrumbs from "../myComps/Breadcrumbs";
import TransactionHistory from "../transactionHistory/Index";
import "./MoneyTransfer.css";

const MoneyTransfer = () => {
    return ( 
        <section className="sc-money-transfter">
            <div className="container">
               <div className="row">
                    <Breadcrumbs text="Сделать перевод" />
                    <div className="col-12">
                        <div className="money-transfer-box">
                            <h3>Выберите валюту</h3>
                            <div className="balances">
                                <button className="balance-btn b-mine active"><span>M</span> Баланс MINE</button>
                                <button className="balance-btn b-plex"><span>P</span> Баланс PLEX</button>
                            </div>

                            <div className="custom__field">
                                <span>Адрес получателя</span>
                                <input type="text" placeholder="Адрес" />
                            </div>

                            <div className="custom__field">
                                <span>Вводите тот-же пароль для входа в кошелек</span>
                                <input type="password" placeholder="Пароль" />
                            </div>
                            <button className="primary__btn">Войти</button>
                        </div>
                    </div>
                    <TransactionHistory exists={true} />
               </div>
            </div>
        </section>
     );
}
 
export default MoneyTransfer;