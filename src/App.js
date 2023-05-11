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
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { SeeAll } from './components/SeeAll/SeeAll';
import { Detail } from './components/Detail/Detail';
import { ScrollButton } from './components/ScrollButton/ScrollButton';

function App() {
  
  const { setUser, setFavoriteList, user, signin } = useStore((state) => state);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        return;
      }

      setUser(null);

      return () => {
        unsub();
      }
    }); 
  }, [setFavoriteList, setUser]);
 
  // if (typeof user === "undefined") {
  //   return <Loading />;
  // }

  return (
    <>
    {signin && <SignIn />} 
    <div className="App">
        <Header />
        <ScrollButton />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/:media_type/:type' element={<SeeAll />} />
          <Route path='/discover' element={<SeeAll />} />
          <Route path='/:media_type/detail/:id' element={<Detail />} />
        </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
