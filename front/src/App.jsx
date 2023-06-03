import {BrowserRouter} from 'react-router-dom'
import { Navigation } from "./components/Navigation";
import Router from './router'
import { Toaster } from "react-hot-toast";
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
        <Navigation />
        <Router />
        <Toaster />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App    