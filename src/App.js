import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Beers from "./Pages/Beers"
import NewBeer from "./Pages/NewBeer"
import RandomBeer from "./Pages/RandomBeer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Beers" element={<Beers />}/>
          <Route path="/NewBeer" element={<NewBeer />}/>
          <Route path="/RandomBeer" element={<RandomBeer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
