import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../stored";
import { Movie } from "../Movie/Movie";
import { Stars } from "../Stars/Stars";
import { Title } from "../Title/Title";
import { Cast } from "./Cast/Cast";
import './Detail.css';
import { Similar } from "./Similar/Similar";
import { Reviews } from './Reviews/Reviews';
import { Trailer } from '../Trailer/Trailer';

export const Detail = () => { 
    const { media_type, id } = useParams();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false); 

    const [isFavourite, setIsFavourite] = useState(null);
    const [isAddList, setIsAddList] = useState(null);
 
    const { user } = useStore((state) => state);
 
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollTop();
    },[])

    useEffect(() => {
        const getDetailMovie = async (media_type, id) => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((details) => {  
                console.log(details.seasons)
                setData(details);
                setLoading(false);  
            })
            .catch((err) => {
                setLoading(false);
            });
        };  

        setLoading(true);
        scrollTop();
        getDetailMovie(media_type, id); 
    }, [id, media_type])

    return ( 
        <div className="container-detail">
            <Trailer /> 
            <div className={`banner ${loading ? 'skeleton' : ''}`} style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
            }}>
                <Title title={`${data.title || data.name || 'Name'} | ${data.original_title || data.original_name || 'Original Name'}`}/> 
   
                <div className='banner-content'>
                    <div className='banner-poster'>
                        <img className={`${loading && 'skeleton'}`} src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}/>
                    </div>
                    
                    <div className='banner-info'> 
                        <span className='banner-info-title'>{data?.title || data?.name}</span>
                        <span className='banner-info-original-title'>{data?.original_title || data?.original_name}</span> 

                        <div className='banner-info-tag'>
                            <span className='banner-info-tag-type'>{media_type}</span> 
                            {data.genres &&
                                data.genres.map((item) => ( 
                                    <span key={item.id} className='banner-info-tag-genre'>{item.name}</span>  
                            ))}
                        </div>
                        <p className='banner-info-overview'>{data?.overview}</p>   
                        {data?.release_date ? (
                            <p className='banner-info-overview'>Release date: {data?.release_date}</p>   
                        ) : (
                            <p className='banner-info-overview'>Last air date: {data?.last_air_date}</p>    
                        )}
                        <br></br>
                        {data?.runtime && (
                            <span className='banner-info-overview'>Runtime: {data?.runtime} minutes</span> 
                        )} 
                        <br></br>
                        <span className='banner-info-overview'>Companies: {   
                                data.production_companies &&
                                data.production_companies.map(item => item.name).join(', ')
                            }
                        </span> 
                        <br></br>
                        <span className='banner-info-overview'>Countries: {   
                                data.production_countries &&
                                data.production_countries.map(item => item.name).join(', ')
                            }
                        </span> 

                        <Stars rating={data?.vote_average}/> 
                        <div className='banner-info-button'>
                            {media_type === "movie" &&  
                                <Link to={`/watch/movie/${id}`}>
                                    <span className='button banner-info-watch'>
                                        Watch now
                                    </span>
                                </Link>
                            }   
                            {user && 
                                <> 
                                    <span 
                                        className='button banner-info-watch favourite'
                                        onClick={(e) => setIsFavourite(isFavourite => !isFavourite)}    
                                    >
                                        {isFavourite ? (
                                            <FavoriteIcon className="icon red" />
                                        ) : (
                                            <FavoriteBorderIcon className="icon"/> 
                                        )} 
                                    </span>
                                    <span 
                                        className='button banner-info-watch add'
                                        onClick={(e) => setIsAddList(isAddList => !isAddList)}    
                                    >
                                        {isAddList ? (
                                            <PlaylistAddCheckIcon className="icon green" />
                                        ) : (
                                            <PlaylistAddIcon className="icon"/>
                                        )}
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </div> 
            </div> 

            <div className="container"> 
                {media_type === "tv" && data?.seasons?.length > 1  && (
                    <>
                        <div className="slider-head">
                            <span className={`slider-head-title trending`}>SEASONS</span>
                        </div>
                        <div className="slider slider-extend see-all_movies season"> 
                            {data?.seasons?.map((item) => {
                                return (
                                    <Link key={item.id} to={`/tv/detail/${id}/season/${item.season_number}`}>
                                        <Movie data={item}/>
                                    </Link> 
                                );
                            })}
                        </div>
                    </>
                )}

                <Cast />

                <Reviews />

                <Similar />

            </div>
        </div>
    );
}