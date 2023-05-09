import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import './SeeAll.css'
import { useCallback, useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import { Loading } from '../Loading/Loading'; 
import { Skeleton } from '../Skeleton/Skeleton';
import { Movie } from '../Movie/Movie';
import SelectCustom from '../SelectCustom/SelectCustom';

const types = [
    {
        mediaType: "Trending",
        mediaTitle: "Trending",
    },
    {
        mediaType: "Popular",
        mediaTitle: "Popular",
    },
    {
        mediaType: "Upcoming",
        mediaTitle: "Upcoming",
    },
    {
        mediaType: "Latest",
        mediaTitle: "Latest",
    },
];

const mediaTypes = [
    {
        mediaType: "Movie",
        mediaTitle: "Movie",
        // mediaLink: `/movie/${type}`,
    },
    {
        mediaType: "TV",
        mediaTitle: "TV",
        // mediaLink: `/tv/${type}`,
    },
];

export const SeeAll = () => {
    const navigate = useNavigate();

    const { media_type, type } = useParams();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState();
    const [page, setPage] = useState(1);

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
                    setMovies((prev) => [...prev, ...data.results]);
                    setTotalPages(data.total_pages);
                    setLoading(false); 
                })
                .catch((err) => { 
                })
            }

            apiSeeAll = "";
            if (type === "trending") {
                apiSeeAll = `https://api.themoviedb.org/3/${type}/${media_type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page + 1}`
            }
            else {                
                apiSeeAll = `https://api.themoviedb.org/3/${media_type}/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page + 1}`
            }
            if (apiSeeAll) {
                fetch(`${apiSeeAll}`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies((prev) => [...prev, ...data.results]);
                    setTotalPages(data.total_pages);
                    setLoading(false);   
                })
                .catch((err) => {
                    setLoading(false);
                })
            }
        },
        [page]
    ); 

    const nextPage = () => {
        setPage(page + 2);
    }

    useEffect(() => {
        scrollTop();
    }, [])

    useEffect(() => {
        setLoading(true);
        getSeeAll(media_type, type);
        
        // alert(media_type)
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
                <div className='see-all-title'>
                    {/* <span className={`slider-head-title trending`}>{type} movies</span>  */}
                    {/* <SelectCustom id="mediatype" data={mediaTypes} placeholder={capitalizeFirstLetter(media_type)} selectTitle="--Media Types--"/> 
                    <SelectCustom id="type" data={types} placeholder={capitalizeFirstLetter(type)} selectTitle="--Types--" /> 
                    <span className='signin sign' onClick={handleDiscover}>Discover</span> */}
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
            </div> 
        </div>
    );
}