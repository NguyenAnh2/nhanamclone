import './App.css';
import Heading from './components/Heading/Heading';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import Greeting from './components/Greeting/Greeting'
import Comming from './components/Comming/Comming';
import News from './components/News/News'
import Partner from './components/Partner/Partner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <Authors />
      <Books  />
      <Greeting />
      <Comming />
      <News />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
