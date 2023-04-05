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
import { SignIn } from './components/Header/SignInForm/SignIn';

function App() {
  
  const { setUser, setFavoriteList, user, signin } = useStore((state) => state);

  useEffect(() => {
    setUser(null); 
    // setFavoriteList([]);
  }, [setFavoriteList, setUser]);

  return (
    <>
    {signin && <SignIn />}
    <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
