import { useParams } from 'react-router-dom';
import './Cast.css'; 
import { useEffect, useState } from 'react';
import { Skeleton } from '../../Skeleton/Skeleton';

export const Cast = () => {
    const { media_type, id } = useParams();

    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
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
                    <h1>Fuck</h1>
                )}
            </div>
        </div>
    );
}