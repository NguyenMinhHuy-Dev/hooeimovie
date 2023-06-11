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
                {reviews.length == 0 && 
                    <ImageFade 
                        lazy_src={
                            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/353225631_1186277066102217_8290600650192175262_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fD39oCiUWqoAX_6GcHb&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdRlS9mn_L7nR32RVVgGhk-6gP9VbEAUREzNjlcHbT1bSQ&oe=64AD22E5"
                        }
                    />
                }
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