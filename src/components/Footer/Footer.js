import { Link } from 'react-router-dom';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import './Footer.css'

export const Footer = () => {
    
    return (
        <div className='footer'>
            <div className='container'>
                <Link to="/" className='brand'>
                    <span className='brand-name'>Hooei's M<LiveTvTwoToneIcon className='logo'/>vie</span>
                </Link> 
                <div className='link-container'>
                    <ul className='link-items'>
                        <li className='link-item'>Movies</li>
                        <li className='link-item'>Trending movies</li>
                        <li className='link-item'>Popular movies</li>
                        <li className='link-item'>Upcoming movies</li>
                    </ul>
                    <ul className='link-items'>
                        <li className='link-item'>TV</li>
                        <li className='link-item'>Trending TV</li>
                        <li className='link-item'>Popular TV</li>
                        <li className='link-item'>Top rated TV</li>
                    </ul> 
                    <ul className='link-items'>
                        <li className='link-item'>Genre</li>
                        <li className='link-item'>Action</li>
                        <li className='link-item'>Adventure</li>
                        <li className='link-item'>Drama</li>
                        <li className='link-item'>Horror</li>
                    </ul>
                    <ul className='link-items'>
                        <li className='link-item'>Contact</li>
                        <li className='link-item'>Facebook</li> 
                        <li className='link-item'>Github</li>
                        <li className='link-item'>Youtube</li>
                    </ul>
                    <ul className='link-items'>
                        <li className='link-item'>Terms of service</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}