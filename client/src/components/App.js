import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
// BrowserRouter tells router how to change, Route used to setup rule between action and what will happen
// Browser only can have max one child component!

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div className="container">
            <BrowserRouter> 
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;