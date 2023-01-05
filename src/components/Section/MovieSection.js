import './MovieSection.css';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import { useEffect, useState } from 'react';
import { Movie } from '../Movie/Movie';

export const MovieSection = ({ type }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = () => {
            fetch(type === "trending"
                ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
                : `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then(async (data) => {
                await setMovies(data.results);
                console.log(movies)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
        };

        setLoading(true);
        getMovies();
    }, [type]);

    return (
        <div className="slider">
            <div className="slider-head">
                <span className={`slider-head-title ${type}`}>{type === "top_rated" ? "Top rated" : type} movies</span>
                {type !== "trending" && <span className="slider-head-more">See all <KeyboardArrowRightTwoToneIcon className="seeall"/></span>}
            </div>
            <div className='slider-extend'>
                {!loading && movies.map((item) => {
                    return (
                        <Movie key={item.id} data={item}/>
                    );
                })} 
            </div>
        </div>
    );
}