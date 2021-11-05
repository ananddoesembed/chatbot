import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from "react-bootstrap";
import "./App.css";
import "./bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homescreen from "./Pages/Homescreen";
import ProductScreen from './Pages/ProductScreen';
import CartScreen from './Pages/CartScreen';
function App() {
  return (
    <Router >
      <Header />
      <Container>
        <Route path="/" component={Homescreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen}/>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
