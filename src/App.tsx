import React from 'react';
import {HashRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
interface Props {

}
const App:React.FC<Props> = function(props) {
    return (
        <HashRouter>
            
            <div>
                    <Link to="/user"> user</Link> 
                    <Link to="/home"> home</Link>
                    <Link to="/about"> about</Link>
                </div>
            <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/about/:id" component={About}></Route>
                <Redirect to="/home"/>
                </Switch>
        </HashRouter>
    );
}
export default App;