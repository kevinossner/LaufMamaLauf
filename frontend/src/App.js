import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CustomerListPage from './pages/CustomerListPage';
import CustomerPage from './pages/CustomerPage';
import CreateCustomerPage from './pages/CreateCustomerPage';

function App() {
  return (
    <div className='container dark'>
      <div className='app'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CustomerListPage />} />
            <Route path="/customer/:id" element={<CustomerPage />} />
            <Route path="/customer/new" element={<CreateCustomerPage />} />
          </Routes>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
