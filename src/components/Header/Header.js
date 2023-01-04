import { useEffect, useRef } from 'react';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import './Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
    const headerRef = useRef(null);

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

    return (
        <div ref={headerRef} className='header'>
            <div className='nav'>
                <Link to="/" className='brand'>
                    <span className='brand-name'>Hooei's M<LiveTvTwoToneIcon className='logo'/>vie</span>
                </Link> 

                <div className='header-list'>
                    
                </div>

                <div className='search'>

                </div>

                <div className='user'>

                </div>
            </div>
        </div>
    );
}