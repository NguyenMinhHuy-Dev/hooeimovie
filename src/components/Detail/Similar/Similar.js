import { useEffect, useState } from "react";
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import './Similar.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../../Movie/Movie";

export const Similar = () => {
    const { media_type, id } = useParams();

    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
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
    }, [media_type, id]);

    return (
        <div className="slider similar">
            <div className="slider-head">
                <span className={`slider-head-title trending`}>Similar {media_type}</span>
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
                                <Link to={`/${media_type}/detail/${item.id}`}>
                                    <Movie data={item}/>
                                </Link>
                            </SwiperSlide> 
                        );
                    })} 
            </Swiper>
        </div>
    );
}