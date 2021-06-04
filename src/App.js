import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
// import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { UsersListProvider } from './context/UsersContext';
import { CheckedStatesProvider } from './context/CheckedStatesContext';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <UsersListProvider>
        <Header />
        <CheckedStatesProvider>
          {/* <MainContent /> */}
          <Routes />
        </CheckedStatesProvider>
        <Footer />
      </UsersListProvider>
    </BrowserRouter>
  );
}

export default App;
