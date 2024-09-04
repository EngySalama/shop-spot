import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountPage from './components/AccountPage';
import AddAddressPage from './components/AddAddressPage';
import AddressPage from './components/AddressPage';
import CardInputForm from './components/CardInputform';
import PaymentPage from './components/PaymentPage';
import InstallmentPage from './components/InstallmentPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AccountPage />} />
          <Route path="/add-address" element={<AddAddressPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/add-payment" element={<CardInputForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/installment" element={<InstallmentPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
