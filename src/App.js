import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Section from './components/section/Section';
import Main from './components/main/Main';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Section />
      <Main/>
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
