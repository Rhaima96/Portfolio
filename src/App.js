import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import {Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';


import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div>
            <CssBaseline/>

            
            <Route exact path="/" component={Home}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/contact" component={Contact}></Route>

        </div>
    );
}

export default App;
