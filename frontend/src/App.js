import './App.css';
import Header from './components/Header';
import CustomerListPage from './pages/CustomerListPage';

function App() {
  return (
    <div className='container dark'>
      <div className='app'>
        <Header />
        <CustomerListPage />
      </div>
    </div>
  );
}

export default App;
