import './App.css';
import Products from './products';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Test
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<App />} />
              <Route path="/masterProduct" element={<Products />} />
            
            </Route>
          </Routes>
        </BrowserRouter>
        <Products/>
      </header>
    </div>
  );
}

export default App;
