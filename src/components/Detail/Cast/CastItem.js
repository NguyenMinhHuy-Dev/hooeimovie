import { ImageFade } from '../../Loading/ImageLoading';
import './Cast.css';  

export const CastItem = ({ data }) => {

    return (
        <div className='cast-item'>
            <ImageFade 
                lazy_src={  
                    data.profile_path ?
                    `https://image.tmdb.org/t/p/w500${data.profile_path}` :
                    "https://i.pinimg.com/564x/8b/6b/0d/8b6b0db69fdd9a1887148436e5821783.jpg"
                } 
            />
            <div className='cast-info'>
                <span className='cast-info-title'>{data.original_name}   </span>
                <span className='cast-info-original-title'>Character: {data.character}</span>
            </div>
        </div>
    );
}