import { useEffect, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import './Banner.css'
import { Link } from 'react-router-dom';

export const Banner = () => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const i = Math.random() < 0.5 ? 0 : 1;

        const getBanner = async () => {
            if (i === 0) { 
                await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    const random = Math.floor(Math.random() * (19 - 0 + 1) + 0);
                    setBanner(data.results[random]); 
                })
                .catch((err) => console.log(err));  
            }
            else {
                await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    const random = Math.floor(Math.random() * (19 - 0 + 1) + 0);
                    setBanner(data.results[random]); 
                })
                .catch((err) => console.log(err));  
            }
        };
        getBanner(); 
    }, []);
    return (
        <div className='banner' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
        }}> 
            <div className='banner-content'>
                <div className='banner-poster'>
                    <img src={`https://image.tmdb.org/t/p/original${banner?.poster_path}`}/>
                </div>
                <div className='banner-info'> 
                    <span className='banner-info-title'>{banner?.title || banner?.name}</span>
                    <span className='banner-info-original-title'>{banner?.original_title || banner?.original_name}</span>
                    <div className='banner-info-tag'>
                        <span className='banner-info-tag-type'>{banner?.media_type}</span>
                        <span className='banner-info-tag-trend'>Trending</span>
                        <span className='banner-info-tag-rating'>Voting: {banner?.vote_average}/10</span>
                        {/* <span className='banner-info-tag-continue'><MoreHorizIcon className='   '/></span> */}
                    </div>
                    <p className='banner-info-overview'>{banner?.overview}</p> 
                    <div className='banner-info-button'>
                        <span className='button banner-info-watch'>
                            Watch now
                        </span>
                        <Link to={`/${banner?.media_type}/detail/${banner?.id}`}>
                            <span className='button banner-info-detail'>See detail <KeyboardDoubleArrowRightTwoToneIcon className='arrow'/></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}