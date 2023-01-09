import { useEffect, useState } from "react";
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import './Slide.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../Movie/Movie";

export const SlideTV = ({ type }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = () => {
            fetch(type === "trending"
                ? `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
                : `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then(async (data) => {
                await setMovies(data.results); 
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
        };

        setLoading(true);
        getMovies();
    }, [type])

    return (
        <div className="slider">
            <div className="slider-head">
                <span className={`slider-head-title ${type}`}>{type} TV</span>
                {type !== "trending" && <span className="slider-head-more">See all <KeyboardArrowRightTwoToneIcon className="seeall"/></span>}
            </div>
            <Swiper 
                modules={[Navigation, Pagination]}
                navigation
                // grabCursor={true}
                spaceBetween={10}
                pagination={{ clickable: true }}
                slidesPerView={6}>
                    {!loading && movies.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Movie data={item}/>
                            </SwiperSlide> 
                        );
                    })} 
            </Swiper>
        </div>
    );
}