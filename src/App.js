import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Portofoliu from "./components/Portofoliu/Portofoliu";
import Main from "./components/Main/Main";
import DespreNoi from "./components/DespreNoi/DespreNoi"
import Contacte from "./components/Contacte/Contacte"
import ServiciiMain from "./components/ServiciiMain/ServiciiMain";
import Detalii from "./components/Portofoliu/Detalii/Detalii"
import Gallery1 from "./components/ServiciiMain/ServiciiList/Gallery1"
import Gallery2 from "./components/ServiciiMain/ServiciiList/Gallery2"
import Gallery3 from "./components/ServiciiMain/ServiciiList/Gallery3"
import Gallery4 from "./components/ServiciiMain/ServiciiList/Gallery4"
import Gallery5 from "./components/ServiciiMain/ServiciiList/Gallery5"



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/Gallery1" component={Gallery1} >

          </Route>
          <Route path="/Gallery2" component={Gallery2} >

          </Route>
          <Route path="/Gallery3" component={Gallery3} >

          </Route>
          <Route path="/Gallery4" component={Gallery4} >

          </Route>

          <Route path="/Gallery5" component={Gallery5} >

          </Route>

          <Route path="/Detalii" component={Detalii} >

          </Route>

          <Route path="/ServiciiMain" component={ServiciiMain} >

          </Route>

          <Route path="/Contacte" component={Contacte} >

          </Route>

          <Route path="/DespreNoi" component={DespreNoi} >

          </Route>

          <Route path="/Portofoliu" component={Portofoliu} >

          </Route>

          <Route path="/" component={Main} >


          </Route>



        </Switch>


        <Footer />



      </div>
    </Router >
  );
}

export default App;
