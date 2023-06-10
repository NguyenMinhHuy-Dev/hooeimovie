import { useParams } from 'react-router-dom';
import './Reviews.css';
import { useState } from 'react';
import { ImageFade } from '../../Loading/ImageLoading';

export const Reviews = () => {
    const { media_type, id } = useParams();

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useState(() => {
        const getReviews = async (media_type, id) => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.results.slice(0, 5));
                setReviews(data.results.slice(0, 5)); 
            })
            .catch((err) => {
                console.log(err);
            })
        };

        setLoading(true);
        getReviews(media_type, id);
    }, [media_type, id])

    return (
        <div className='reviews'> 
            <div className="slider-head">
                <span className={`slider-head-title trending`}>REVIEWS</span>
            </div>
            <div className='reviews-container'>
                {reviews?.map(item =>  
                    <div key={item.id} className='review'>
                        <div className='review-avatar'>
                            <ImageFade 
                                lazy_src={  
                                    item.author_details.avatar_path ?
                                    item.author_details.avatar_path[1] === 'h' &&
                                    item.author_details.avatar_path[2] === 't' ?
                                    item.author_details.avatar_path.substring(1) :
                                    `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}` :
                                    "https://i.pinimg.com/564x/8b/6b/0d/8b6b0db69fdd9a1887148436e5821783.jpg"
                                } 
                            /> 
                        </div>
                        <div className='review-detail'>
                            <div className='review-info'>
                                <span className='review-info--name'>{item.author}</span>
                                <span className='review-info--date'>{new Date(item.updated_at).toDateString()}</span>
                            </div>
    
                            <div className='review-content'>
                                {item.content}
                            </div>
                        </div>
                    </div> 
                )}
            </div>
        </div>
    );
}