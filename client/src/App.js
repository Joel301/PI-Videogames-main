import "./App.css";
import { Route } from "react-router-dom";
import StartPage from "./modules/StartPage";
import CardContainer from "./modules/CardContainer";
import CardDetail from "./modules/CardDetail";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={StartPage} />
            <Route exact strict path="/home" component={CardContainer} />
            <Route exact path="/home/:ID" component={CardDetail} />
        </div>
    );
}

export default App;
