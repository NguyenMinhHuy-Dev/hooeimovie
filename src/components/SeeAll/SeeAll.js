import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import './SeeAll.css'
import { useCallback, useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import { Loading } from '../Loading/Loading'; 
import { Skeleton } from '../Skeleton/Skeleton';
import { Movie } from '../Movie/Movie';
import SelectCustom from '../SelectCustom/SelectCustom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const SeeAll = () => {
    const navigate = useNavigate();

    const { media_type, type } = useParams();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState();
    const [page, setPage] = useState(1);

    const [banner, setBanner] = useState(null); 

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const getSeeAll = useCallback(
        (media_type, type) => {
            let apiSeeAll = "";
            if (type === "trending") {
                apiSeeAll = `https://api.themoviedb.org/3/${type}/${media_type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            }
            else {                
                apiSeeAll = `https://api.themoviedb.org/3/${media_type}/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            }

            if (apiSeeAll) {
                fetch(`${apiSeeAll}`)
                .then((res) => res.json())
                .then((data) => {
                    // setMovies((prev) => [...prev, ...data.results]);
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                    setLoading(false); 
                    if (!banner) {
                        const random = Math.floor(Math.random() * (19 - 0 + 1) + 0);
                        setBanner(data.results[random]); 
                    }
                })
                .catch((err) => { 
                })
            }

            // apiSeeAll = "";
            // if (type === "trending") {
            //     apiSeeAll = `https://api.themoviedb.org/3/${type}/${media_type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page + 1}`
            // }
            // else {                
            //     apiSeeAll = `https://api.themoviedb.org/3/${media_type}/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page + 1}`
            // }
            // if (apiSeeAll) {
            //     fetch(`${apiSeeAll}`)
            //     .then((res) => res.json())
            //     .then((data) => {
            //         setMovies((prev) => [...prev, ...data.results]);
            //         setTotalPages(data.total_pages);
            //         setLoading(false);   
            //     })
            //     .catch((err) => {
            //         setLoading(false);
            //     })
            // }
        },
        [page]
    );  

    const prevPage = () => {
        setPage(page - 1);
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const goToPage = (desPage) => {
        setPage(desPage);
    }

    useEffect(() => {
        scrollTop(); 
    }, [])

    useEffect(() => {
        setLoading(true);
        getSeeAll(media_type, type);
        scrollTop();
         
    }, [media_type, type, page, getSeeAll]);

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    
    const handleDiscover = () => {
        const MediaType = document.getElementById('mediatype').textContent.toLowerCase();
        const Type = document.getElementById('type').textContent.toLowerCase();
        
        navigate(`/${MediaType}/${Type}`);
    }

    return ( 
        <div className='container see-all-container'> 
            <div className='see-all'>
                <Title title={`${media_type.toUpperCase()} | ${type.toUpperCase()}`} />
                <div className='banner' style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
                }}>
                    <div className='see-all-title'>
                        <span className={`slider-head-title trending`}>{type} movies</span>  
                        <span className='page-number'>Page {page}</span>
                    </div>
                </div>
                {/* <div className='see-all-title'>
                    <span className={`slider-head-title trending`}>{type} movies</span>  
                </div> */}
                
                <div className='see-all-pages'>
                    {page - 1 > 0 && 
                        <ArrowBackIosNewRoundedIcon onClick={prevPage} className='page-icon'/>
                    }
                    {page - 1 > 0 ? (
                        <>
                            <span onClick={e => goToPage(page - 1)}>{page - 1}</span>
                            <span className='current'>{page}</span>
                            <span onClick={e => goToPage(page + 1)}>{page + 1}</span>
                        </>
                    ) : (
                        <>
                            <span className='current'>{page}</span>
                            <span onClick={e => goToPage(page + 1)}>{page + 1}</span>
                            <span onClick={e => goToPage(page + 2)}>{page + 2 }</span>
                        </>
                    )}
                    {page + 1 <= Math.round(totalPages/2) && 
                        <ArrowForwardIosRoundedIcon onClick={nextPage} className='page-icon'/>
                    }
                </div>
                <div className='see-all_movies'>
                    
                    {!loading ? (  
                        movies.map((item) => (
                            <Link key={item.id} id={item.id} to={`/${media_type}/detail/${item.id}`}>
                                <Movie data={item} />
                            </Link>
                                // <Movie  key={item.id} data={item} />
                        ))
                    ) : (
                        <>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </>
                    )}
                </div>  
                
                <div className='see-all-pages'>
                    {page - 1 > 0 && 
                        <ArrowBackIosNewRoundedIcon onClick={prevPage} className='page-icon'/>
                    }
                    {page - 1 > 0 ? (
                        <>
                            <span onClick={e => goToPage(page - 1)}>{page - 1}</span>
                            <span className='current'>{page}</span>
                            <span onClick={e => goToPage(page + 1)}>{page + 1}</span>
                        </>
                    ) : (
                        <>
                            <span className='current'>{page}</span>
                            <span onClick={e => goToPage(page + 1)}>{page + 1}</span>
                            <span onClick={e => goToPage(page + 2)}>{page + 2 }</span>
                        </>
                    )}
                    {page + 1 <= Math.round(totalPages/2) && 
                        <ArrowForwardIosRoundedIcon onClick={nextPage} className='page-icon'/>
                    }
                </div>
            </div> 
        </div>
    );
}