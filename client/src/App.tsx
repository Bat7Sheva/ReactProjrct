import React from 'react';
import './App.css';
import Home from './home';
import Layout from './Layout';
import Login from './manager/login/login'
import NotFound from './notFound'
import PrimarySearchAppBar from './toolbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetails from './customer/CustomerDetails';
import ViewBusiness from './manager/viewBusiness/viewBusiness';
// import ViewBusiness from './manager/viewBusiness/ViewBusiness';
// import BusinessDetails from './manager/business-details/business-details';
// Customer
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <PrimarySearchAppBar />
        <Customer /> */}
        <BrowserRouter>     
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CustomerDetails />} />
              <Route path="/home" element={<CustomerDetails />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/view" element={<ViewBusiness />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;