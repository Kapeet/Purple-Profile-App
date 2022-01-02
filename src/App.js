import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button} from '@shopify/polaris'
import Navbar from './components/Navbar';
function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Navbar />
      
      {/* <Button onClick={() => alert('Button clicked!')}>Example button</Button> */}
  </AppProvider>
  );
}

export default App;
