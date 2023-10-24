
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Alerttt from './components/alert';
import Carta from './components/main';


function App() {
  return (
    <div className="App">
      <header >
      <NavBar/>
      </header>
      <main fluid="true">
        <div>
        <h1>Welcome!</h1>
        <Alerttt/>
        </div>
        <div > 
        <Carta/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
