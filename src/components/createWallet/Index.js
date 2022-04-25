import Breadcrumbs from "../myComps/Breadcrumbs";
import { Link } from "react-router-dom";
import "./CreateWallet.css";
import GoBack from "../myComps/GoBack";
import { useState } from "react";
import load_icon from "../../svg/load_icon.svg";
import copy_icon from "../../svg/copy_icon.svg";
import warning_icon from "../../svg/warning_icon.svg";

const CreateWallet = () => {

    const [switchComps, setSwtichComps] = useState(false);

    // Создать кошелок 
    const CreateWalletMain = () => {
        return (
            <>
                <Breadcrumbs backUrl={'/login-wallet'} text={'Создать кошелек'} />
                <div className="col-12">
                    <div className="create-wallet-box">
                        <h4>Создать  кошелек</h4>
                        <p>У вас уже есть кошелёк? <Link to='/login-wallet'>Войти</Link></p>
                        <p>Новая мнемоническая фраза генерируется, когда Вы создаёте новый кошелек. Ваша Tezos мнемоническая фраза является ключом к Вашему кошельку и к средствам хранящимся на нем.</p>
                        <div className="cr-btn-box">
                            <button className="primary__btn" onClick={() => setSwtichComps(true)}>Создать</button>
                        </div>
                    </div>   
                </div>
            </>
        )
    }

    // Создать кошелок Данные 
    const CreateWalletData = () => {
        return (
            <>
                <Link to="#" onClick={() => setSwtichComps(!switchComps)}><GoBack text={'Назад'} /></Link>
                <div className="col-12">
                    <div className="create-wallet-box">
                        <h4>Создать кошелек</h4>
                        <p>У вас уже есть кошелёк? <Link to='/login-wallet'>Войти</Link></p>
                        <p>Новая мнемоническая фраза генерируется, когда Вы создаёте новый кошелек. Ваша Tezos мнемоническая фраза является ключом к Вашему кошельку и к средствам хранящимся на нем.</p>
                        <div className="cr-btn-box">
                            <button className="primary__btn" onClick={() => setSwtichComps(true)}>Создать</button>
                            <button className="load-file"><img src={load_icon} alt="" /> Скачать файлом</button>
                        </div>
                        <div className="form-fields">
                            <label className="custom__field">
                                <span>Сгенерированный адрес</span>
                                <div className="field">
                                    <input type="text" readOnly value={'awjgpjeiw9dphtokfdopwopbkooeasokdokaw[pawp'} />
                                    <button className="btn copy-text"><img src={copy_icon} alt="" /></button>
                                </div>
                            </label>
                            <label className="custom__field">
                                <span>Сгенерированная SEED-фраза</span>
                                <div className="field">
                                    <input type="text" readOnly value={'awjgpjeiw9dphtokfdopwopbkooeasokdokaw[pawp'} />
                                    <button className="btn copy-text"><img src={copy_icon} alt="" /></button>
                                </div>
                            </label>
                            <label className="custom__field">
                                <span>Сгенерированный Secret key</span>
                                <div className="field">
                                    <input type="text" readOnly value={'awjgpjeiw9dphtokfdopwopbkooeasokdokaw[pawp'} />
                                    <button className="btn copy-text"><img src={copy_icon} alt="" /></button>
                                </div>
                            </label>
                        </div>
                        <div className="warning">
                            <h5><img src={warning_icon} alt="" /> Не потеряйте эту фразу</h5>
                            <p>Если Вы её потеряете Вы не сможете её восстановить</p>
                            <p>Не делитесь этой фразой с другими людьми! Ваши средства будут украдены если Вы раскроете мнемоническую фразу на враждебном / подставном сайте.</p>
                            <p>Сохраните копию! Храните её таким образом, как если бы она стоила миллионы, которые она может однажды стоить.</p>
                        </div>
                    </div>   
                </div>
            </>
        )
    }

    return ( 
        <section className="sc-create-wallet">
            <div className="container">
                <div className="row">
                { switchComps ? <CreateWalletData /> : <CreateWalletMain /> }
                </div>
            </div>
        </section>
     );
}
 
export default CreateWallet;