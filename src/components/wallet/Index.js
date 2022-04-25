import TransactionHistory from "../transactionHistory/Index";
import "./Wallet.css";
import SingleBalance from "../singleBalance/Index";


const Wallet = () => {
    return ( 
        <>
        <section className="sc-wallet">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <h4>Добро пожаловать</h4>
                        <a href="#" className="link-to-pool">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85839 0.0496806C6.60002 0.170274 5.66409 0.436596 4.60448 0.975583C3.34927 1.61401 2.22292 2.62359 1.40164 3.84629C1.0539 4.36399 0.628968 5.23797 0.424935 5.85508C0.260247 6.35319 0.129427 6.92007 0.0494741 7.48203C-0.00607471 7.87253 -0.00607471 9.18333 0.0494741 9.57383C0.188595 10.5518 0.447084 11.4085 0.850933 12.2301C1.30784 13.1596 1.75538 13.784 2.49425 14.5229C3.22505 15.2537 3.85924 15.71 4.75389 16.1489C5.37815 16.4551 5.7812 16.6042 6.41405 16.7629C8.07467 17.1795 9.74017 17.0996 11.3626 16.5256C11.8544 16.3517 12.7129 15.9214 13.1543 15.6277C14.1466 14.9674 15.0575 14.0336 15.7075 13.0103C15.9466 12.6339 16.331 11.8395 16.4878 11.3977C17.2678 9.19979 17.132 6.84075 16.1069 4.77953C15.6932 3.94769 15.2326 3.29575 14.586 2.62661C13.8689 1.88452 13.1655 1.37253 12.2246 0.907616C11.2411 0.421688 10.3247 0.162306 9.23632 0.0617333C8.89804 0.0304892 8.12902 0.023749 7.85839 0.0496806ZM12.9137 7.79606H9.19694V4.15028H7.83561V7.79606H4.60829H4.11489V9.17479H4.54165H7.83561V12.9491H9.19694V9.17479H12.487H12.9137V8.49412V7.79606ZM7.83561 7.79606V7.80318L8.54761 7.80476L9.19694 7.80619V7.79606H7.83561Z" fill="#011E46"/>
                        </svg>
                         Привязать к pool</a>
                    </div>
                    <div className="col-12">
                       <div className="row">
                            <div className="s-wallet-container">
                                <SingleBalance balanceTitle={"Баланс MINE"} 
                                statusExists={true} status={false} mineBalance={'0,0'} walletAdress={"Адрес кошелька Collabor"} fieldValue={"mp16rsvR1tHzMKjhVVhFNR3mBy7RWXwcVkiK"} />

                                <SingleBalance balanceTitle={"Баланс PLEX"} 
                                statusExists={false} plexBalance={"0,0"} walletAdress={"Адрес кошелька Collabor"} fieldValue={"mp16rsvR1tHzMKjhVVhFNR3mBy7RWXwcVkiK"} />

                                <SingleBalance balanceTitle={"Баланс MINE"} 
                                statusExists={true} status={true} mineBalance={"0,0"} walletAdress={"Адрес кошелька Collabor"} fieldValue={"mp16rsvR1tHzMKjhVVhFNR3mBy7RWXwcVkiK"} />

                                <SingleBalance balanceTitle={"Баланс PLEX"} 
                                statusExists={false} plexBalance={"0,0"} walletAdress={"Адрес кошелька Collabor"} fieldValue={"mp16rsvR1tHzMKjhVVhFNR3mBy7RWXwcVkiK"} />
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
           <div className="row">
                <TransactionHistory exists={false} />
           </div>
        </div>
        </>
     );
}
 
export default Wallet;