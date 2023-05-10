import { useEffect, useRef } from 'react';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './Header.css'
import { Link } from 'react-router-dom';
import { User } from './User';
import { Genre } from './Genre';
import { TopRated } from './TopRated';
import { Upcoming } from './Upcoming';
import { useStore } from '../../stored'
import { SignIn } from './SignInForm/SignIn';

export const Header = () => {
    const headerRef = useRef(null);

    const { setSignIn, user, signin } = useStore((state) => state);

    useEffect(() => {
        const handleScrolled = () => {
            const header = headerRef.current;
            const sticky = header.offsetTop;

            if (header) {
                if (window.pageYOffset > sticky) {
                    header.classList.add("scrolled");
                } 
                else {
                    header.classList.remove("scrolled");
                }
            }
        }

        window.addEventListener("scroll", handleScrolled);
        return () => window.removeEventListener("scroll", handleScrolled);
    }, []);

    const handleClickSignIn = () => {
        setSignIn(true); 
    }

    return (
        <div ref={headerRef} className='header'>
            <div className='nav'>
                <Link to="/" className='brand'>
                    <span className='brand-name'>Hooei's M<LiveTvTwoToneIcon className='logo'/>vie</span>
                </Link> 

                <div className='header-list'>
                    {/* <Genre />
                    <TopRated />
                    <Upcoming /> */} 
                    
                    <div className='header-list-item TopRated'>
                        <Link to="/" className='header-list-item-link'>
                            <span>Home</span>
                        </Link>
                    </div> 
                    <div className='header-list-item TopRated'>
                        <span>Discover</span>
                    </div> 
                    <div className='header-list-item TopRated'>
                        <span>About Us</span>
                    </div> 
                </div>

                <div to='/search' className='search'>
                    <input type="text" className='search-input' placeholder='What movie do you want to watch?'/>
                    <SearchTwoToneIcon className='search-icon' />
                </div>

                <div className='user'>
                    {user ? (
                        <User user={user} />
                    ) : (
                        <>
                            {/* <span className='signup sign'>Sign up</span> */}
                            <span 
                                className='signin sign'
                                onClick={handleClickSignIn}
                            >
                                Sign in
                            </span> 
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}