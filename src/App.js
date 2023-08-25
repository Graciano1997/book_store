import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import Categories from './components/Categories';
import './App.css';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
