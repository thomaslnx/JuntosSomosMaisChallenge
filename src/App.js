import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { UsersListProvider } from './context/UsersContext';
import { CheckedStatesProvider } from './context/CheckedStatesContext';

function App() {
  return (
    <UsersListProvider>
      <Header />
      <CheckedStatesProvider>
        <MainContent />
      </CheckedStatesProvider>
      <Footer />
    </UsersListProvider>
  );
}

export default App;
