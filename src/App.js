import './App.scss';
import backgroundMain from "../src/img/background-main.png"
import MainPage from "./components/main-page/main-page";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Halls from "./components/halls/halls";
import Equipment from "./components/equipment/equipment";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Contacts from "./components/contacts/contacts";
import Rules from "./components/rules/rules";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/home" component={MainPage}/>
                        <Route exact path="/halls" component={Halls}/>
                        <Route exact path="/equipment" component={Equipment}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/rules" component={Rules}/>
                    </Switch>
                </div>

            </div>
        </Router>


    );
}

export default App;
