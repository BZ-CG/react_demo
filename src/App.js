import React from 'react';
import {Button} from "antd";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

function App() {
  return (
        <BrowserRouter>
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Admin}/>
        </BrowserRouter>
  );
}

export default App;
