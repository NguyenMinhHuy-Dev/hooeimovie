import { useParams } from 'react-router-dom';
import './SeeAll.css'
import { useCallback, useEffect, useState } from 'react';
import { Title } from '../Title/Title';
import { Loading } from '../Loading/Loading'; 
import { Skeleton } from '../Skeleton/Skeleton';

export const SeeAll = () => {
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
                apiSeeAll = `https://api.themoviedb.org/3/trending/${type}/${media_type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            }
            else {                
                apiSeeAll = `https://api.themoviedb.org3/3/${media_type}/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            }

            if (apiSeeAll) {
                fetch(`${apiSeeAll}`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies((prev) => [...prev, data.results]);
                    setTotalPages(data.total_pages);
                    setLoading(false);
                })
                .catch((err) => {
                    // setLoading(false);
                })
            }
        },
        [page]
    );

    const nextPage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        scrollTop();
    }, [])

    useEffect(() => {
        setLoading(true);
        getSeeAll(media_type, type);
    }, [page, getSeeAll, media_type, type])

    return ( 
        <div className='container see-all-container'> 
            <div className='see-all'>
                <Title title={`${media_type.toUpperCase()} | ${type.toUpperCase()}`} />
                <div className='see-all-title'>
                    <span className={`slider-head-title trending`}>{type} movies</span> 
                </div>
                <div className='see-all_movies'>
                    {!loading ? (
                        <Loading />
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