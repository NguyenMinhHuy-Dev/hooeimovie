import { useParams } from 'react-router-dom';
import './Cast.css'; 
import { useEffect, useState } from 'react';
import { Skeleton } from '../../Skeleton/Skeleton';
import { CastItem } from './CastItem';

export const Cast = () => {
    const { media_type, id } = useParams();

    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCast = async (media_type, id) => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then((data) => {  
                setCast(data.cast.slice(0, 18));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        setLoading(true);
        getCast(media_type, id);
    }, [media_type, id])

    return (
        <div className="cast">
            <div className="slider-head">
                <span className={`slider-head-title trending`}>CAST</span>
            </div>
            <div className='slider slider-extend see-all_movies'>
                {loading ? (
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
                    </>
                ) : ( 
                    cast.map(item => <CastItem data={item} key={item.id} />) 
                )}
            </div>
        </div>
    );
}