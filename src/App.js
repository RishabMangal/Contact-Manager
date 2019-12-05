import React, { Component } from 'react';
// import Contact from './components/Contact'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Contacts from './components/Contacts/Contacts'
import Header from './components/layout/Header'
import AddContacts from './components/Contacts/AddContacts'
import EditContacts from './components/Contacts/EditContacts'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './Context'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const name = "Rishab Mangal";
//   let showname = true;
//   let showid = true;
//   let math;
//   if (showid == true)
//   {
//     math=<h2>ID is 2018KUCP1131</h2>  
//   }
//   else {
//     math = null;
//   }
//   return (
//     <div className="App">
//       <h1>
//         Hello World!
//       </h1>
//       {showname ? <h1>This is {name}</h1> : null}
//       {math}
//     </div>
//   );
// }


class App extends Component
{
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact manager" />
            <div className="container">
              {/* <Contact name="Rishabh Mangal"
                email="Rishabhmangal1@gmail.com"
                phone="9928799243" />
              <Contact name="Priti Mangal"
                email="Pritimangal1@gmail.com"
                phone="8952080039" /> */}
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/x" component={AddContacts}></Route>
                <Route exact path="/edit/:id" component={EditContacts}></Route>
                <Route exact path="/about/:id" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
          </Router>
     </Provider>
    )
  }
}

export default App;
