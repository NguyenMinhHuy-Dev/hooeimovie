import { useEffect, useRef } from 'react';
import './ScrollButton.css';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';

export const ScrollButton = () => {
    const scrollButtonRef = useRef(null); 

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScrolled = () => {
            const scrollButton = scrollButtonRef.current;
            const sticky = document.getElementById('header').offsetTop;

            if (scrollButton) {
                if (window.pageYOffset > sticky) {
                    scrollButton.classList.add("scrolled"); 
                } 
                else {
                    scrollButton.classList.remove("scrolled"); 
                }
            }
        }

        window.addEventListener("scroll", handleScrolled);
        return () => window.removeEventListener("scroll", handleScrolled);
    }, []);

    return (
        <div ref={scrollButtonRef} onClick={scrollTop} id='scroll-button"' className="scroll-button">
            <AirplanemodeActiveRoundedIcon className='scroll-icon'/>
        </div>
    );
}