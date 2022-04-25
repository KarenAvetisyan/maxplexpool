import "./TrHistory.css";

const TransactionHistory = ({exists}) => {
    return ( 
        <div className="col-12 transaction-history">
            <h3>История транзакций</h3>
            {exists ?
                <div className="tabel-box">
                    <div className="gradiend-left"></div>
                        <div className="scroll-x">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">#Транзакции</th>
                                        <th scope="col">Дата операции</th>
                                        <th scope="col">Тип операции</th>
                                        <th scope="col">Адрес отправителя</th>
                                        <th scope="col">Адрес получателя</th>
                                        <th scope="col">Сумма</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ooLwad...vv</td>
                                        <td><span className="data-time">11-04-2022</span> <span className="data-time">18:24:56</span></td>
                                        <td><span className="send">Отправка plex</span></td>
                                        <td>ooLwad...vv</td>
                                        <td>ooLwad...vv</td>
                                        <td><span className="negative"><em>-35,56</em> PLEX</span></td>
                                    </tr>
                                    <tr>
                                        <td>ooLwad...vv</td>
                                        <td><span className="data-time">11-04-2022</span> <span className="data-time">18:24:56</span></td>
                                        <td><span className="recieve">Получение plex</span></td>
                                        <td>ooLwad...vv</td>
                                        <td>ooLwad...vv</td>
                                        <td><span className="positive"><em>+46,12</em> PLEX</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div className="gradiend-right"></div>
                </div>
            : 
                <p className="no-history">У вас ещё нет совершонных транзакций</p>
             }
            
        </div>
     );
}
 
export default TransactionHistory;