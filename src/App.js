import {BrowserRouter as Router, Route, RouteProps, Switch} from "react-router-dom";
import Home from "./Home";
import AddSemester from "./AddSemester"
import CssBaseline from "@material-ui/core/CssBaseline";
import {Redirect} from "react-router";
import "./firebase"
import firebase, {firebaseConfig} from "./firebase";

function App(){
    return(
        <div className="App">
          <CssBaseline/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/createSemester">
                        <AddSemester/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App;
