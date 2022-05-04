import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact }  from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Items } from './pages/items/Items';
import { Meal } from './pages/meals/Meal';

function App() {
    return (
        <>
            <Router basename='/cv-portfolio-sap'>
                <Header />
                <main className="container content">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/contact" element={<Contact />}></Route>
                            <Route path="/category/:name" element={<Items />}></Route>
                            <Route path="/meal/:idMeal" element={<Meal />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
