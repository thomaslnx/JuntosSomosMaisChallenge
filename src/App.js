import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { UsersListProvider } from './context/UsersContext';

function App() {
  return (
    <UsersListProvider>
      <Header />
      <MainContent />
      <Footer />
    </UsersListProvider>
  );
}

export default App;
