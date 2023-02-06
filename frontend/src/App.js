import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <Router>
       <Header />
       <main className='py-3'>
        <Container>
          
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>

        </Container>
       </main>
       <Footer />
    </Router>
  );
}

export default App;
