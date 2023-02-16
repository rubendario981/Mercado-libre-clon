import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Header />
      <Home/>
    </div>
  )
}

export default App
