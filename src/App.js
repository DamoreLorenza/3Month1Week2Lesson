import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Alerttt from "./components/alert";
import Carta from "./components/main";
import horror from './book/horror.json'
import Alert from 'react-bootstrap/Alert';
import SingleBook from './components/singleBook'
import BookList from "./components/bookList";
import CommentArea from "./components/recensione"
import Commenti from "./components/commenti";

function App() {
  return (
    <div className="App">
      
      <header>
        <NavBar />
      </header>
      <Alert variant="success" className="bg-success text-white fw-bold me-5 ms-5">
          Offerta del giorno
        </Alert>
        
        <BookList manyBooks={horror} />
        <CommentArea/>
        <Commenti/>
      <main fluid="true">
        <h1 className="titolo">Welcome!</h1>
        <Alerttt />

        <Carta />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
