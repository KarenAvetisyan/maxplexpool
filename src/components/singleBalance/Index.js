import "./SingleBalance.css";
import copy_icon from "../../svg/copy_icon.svg";
import arrow_icon from "../../svg/arrow.svg";

const SingleBalance = ({balanceTitle, statusExists, status, mineBalance, plexBalance, walletAdress, fieldValue}) => {
    return ( 
        <>
            <div className="single-wallet-balance">
                <div className="b-head">
                    <h5>{balanceTitle}</h5>
                   {statusExists ? 
                    <div className="status-box">
                        {status ? 
                        <div className="status positive"><span>!</span> Привязан к pool</div> :
                        <div className="status negative"><span>!</span> Не привязан к pool</div>
                        }
                    </div>
                    :
                    <div className="status-box">
                        
                    </div>
                    }
                </div>
              
                <div className="__balance">
                    {mineBalance && <p><span className="b-mine">M</span> {mineBalance}</p>} 
                    {plexBalance && <p><span className="b-plex">P</span> {plexBalance}</p>} 
                </div>
                
                <label className="balance__field">
                    <span>{walletAdress}</span>
                    <div className="field">
                        <input type="text" readOnly value={fieldValue} />
                        <button className="btn copy-text"><img src={copy_icon} alt="" /></button>
                    </div>
                </label>
                <div className="submit-btns">
                    <button className="s-btns submit"><img src={arrow_icon} alt="" /> Отправить</button>
                    <button className="s-btns get">Получить</button>
                </div>
            </div>
        </>
     );
}
 
export default SingleBalance;