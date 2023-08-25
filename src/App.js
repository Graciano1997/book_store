import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="category" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
