import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import LoginPage from './pages/Login';
import { useHistory } from "react-router-dom";
import Header from './components/header/Index';
import LoginWalletPage from './pages/LoginWallet';
import CreateWallet from './components/createWallet/Index';
import Footer from './components/footer/Index';
import MoneyTransfer from './components/moneyTransfer/Index';
import Wallet from './components/wallet/Index';

function App() {

  const history = useHistory();

  return (
    <div className='wrapper' style={history.location.pathname == '/' ? {'paddingTop': '0'} : {'paddingTop': '61px'}}>
          { history.location.pathname !== '/' && <Header />}
            <Switch>
                <Route exact path={'/'}><LoginPage /></Route> 
                <Route path={'/login-wallet'}><LoginWalletPage /></Route> 
                <Route path={'/create-wallet'}><CreateWallet /></Route> 
                <Route path={'/money-transfer'}><MoneyTransfer /></Route> 
                <Route path={'/wallet'}><Wallet /></Route> 
            </Switch>
          { history.location.pathname !== '/' && history.location.pathname !== '/login-wallet' &&  <Footer />}
    </div>
  );
}

export default withRouter(App);
