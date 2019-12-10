import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// BrowserRouter tells router how to change, Route used to setup rule between action and what will happen
// Browser only can have max one child component!
const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter> 
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/surveys" component={Dashboard} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;