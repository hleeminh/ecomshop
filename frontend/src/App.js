import Home from "./pages/Home";
import Header from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom"


const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
      <Home />
    </>


  );
}

export default App;
