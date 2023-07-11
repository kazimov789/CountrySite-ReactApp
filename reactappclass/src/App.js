import { Routes, BrowserRouter, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<CountryList />}/>
          <Route path='/detail/:id' element={<CountryDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
