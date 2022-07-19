import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Quote from "./pages/Quote";
import { QuoteProvider } from './components/context/QuoteContext';

function App() {

  return (
    <QuoteProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />      
      <Route path="/quote/:id" element={<Quote />} />
    </Routes>
    </Router>
    </QuoteProvider>
  );
}

export default App;
