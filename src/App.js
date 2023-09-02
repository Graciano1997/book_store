import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import Categories from './components/Categories';
import Error from './components/Error';

function App() {
  return (
    // <div className={style.shadow}>
    // <div className={style.panelBg}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    // </div>
  );
}

export default App;
