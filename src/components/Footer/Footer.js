import { Link } from 'react-router-dom';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
                        <li className='link-item link-item'>Contact</li>
                        <li className='link-item link-item-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100015232036699' target="_blank">
                                Facebook <FacebookIcon className='fb'/>
                            </a>
                        </li> 
                        <li className='link-item link-item-icon'>
                            <a href='https://github.com/hooeiholigan' target="_blank">
                                Github <GitHubIcon className='gh'/>
                            </a>
                        </li>
                        <li className='link-item link-item-icon'>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">
                                Youtube <YouTubeIcon className='ytb'/>
                            </a>
                        </li>
                    </ul>
                    <ul className='link-items'>
                        <li className='link-item'>Terms of service</li> 
                        <li className='link-item not-link'>© 2023 hooeimovie.vercel.app</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}