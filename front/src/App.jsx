import {BrowserRouter} from 'react-router-dom'
import { Navigation } from "./components/Navigation";
import Router from './router'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Router />
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App    