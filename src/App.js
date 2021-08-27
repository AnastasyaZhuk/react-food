import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <main className="container content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contacts' component={Contact}/>
                        <Route path='/category/:name' component={Category}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
