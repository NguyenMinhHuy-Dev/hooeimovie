import { Link, useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import './Detail.css';
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import { Trailer } from "../Trailer/Trailer";
import { Stars } from "../Stars/Stars";

export const Detail = () => { 
    const { media_type, id } = useParams();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false); 
 
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
                setData(details);
                setLoading(false); 
                console.log(details);
            })
            .catch((err) => {
                setLoading(false);
            });
        };  

        setLoading(true);
        getDetailMovie(media_type, id); 
    }, [id, media_type])

    return (
        <div className="container container-detail"> 
        
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
                        {/* <div className='banner-info-tag'>
                            <span className='banner-info-tag-type'>{media_type}</span> 
                            {data?.runtime ? (
                                <span className='banner-info-tag-rating'>{data?.runtime} minutes</span> 
                            ) : (
                                <span className='banner-info-tag-rating'>{data?.episode_run_time} minutes / episode</span> 
                            )}
                        </div> */}
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
                        {data?.runtime ? (
                            <span className='banner-info-overview'>Runtime: {data?.runtime} minutes</span> 
                        ) : (
                            <span className='banner-info-overview'>Runtime: {data?.episode_run_time} minutes / episode</span> 
                        )}
                        <Stars rating={data?.vote_average}/>
                        {/* <div className="detail-seasons">
                            {data?.seasons?.map((item) => {
                                if (data.last_episode_to_air.season_number === item.season_number) {
                                    return (
                                        <Link  key={item.id} to={`/${media_type}/detail/${data.last_episode_to_air.show_id}`}>
                                            <span className='banner-info-tag-genre current'>Season {item.season_number}: {item.name}</span>  
                                        </Link>
                                    );
                                }
                                else {
                                    return (
                                        <Link key={item.id} to={`/${media_type}/detail/${item.id}`}>
                                            <span className='banner-info-tag-genre'>Season {item.season_number}: {item.name}</span> 
                                        </Link>
                                    );
                                }
                            })}
                        </div> */}
                        <div className='banner-info-button'>
                            <span className='button banner-info-watch'>
                                Watch now
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}