import React , {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Start from './Views/Start/Start';
import initialData from './initialData';
import Questions from './Components/Questons/Questions';


function App() {
    
    const [dataQuestions ] = useState(initialData);

    return (
        <Router>
            <div className="backgroundImage">
                <Switch>
                    <Route exact path="/">
                      <Start dataQuestions ={dataQuestions}/>
                    </Route>
                    <Route exact path="/questions/:id">
                        <Questions dataQuestions ={dataQuestions}/>
                    </Route>
                    <Route exact path="/end"></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
