import {BrowserRouter} from 'react-router-dom'
import { Navigation } from "./components/Navigation";
import Router from './router'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
      <Toaster />
    </BrowserRouter>
  )
}

export default App    