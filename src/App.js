import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Search } from './components/Search/Search';
import { Loading } from './components/Loading/Loading';
import { useStore } from './stored';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
  
  const { setUser, setFavoriteList, user } = useStore((state) => state);

  useEffect(() => {
    setUser(null);
    // setFavoriteList([]);
  }, [setFavoriteList, setUser]);
 

  // if (!user) {
  //   return <Loading />
  // } 

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
