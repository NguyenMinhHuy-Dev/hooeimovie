import { ImageFade } from '../Loading/ImageLoading';
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import './Movie.css';

export const Movie = ({ data }) => {
    const { poster_path } = data;
    // console.log(poster_path)
    return (
        <div className='movie' id={data.id}>
            <ImageFade 
                lazy_src={
                    poster_path
                    ?  `https://image.tmdb.org/t/p/w500${poster_path}`
                    : "https://wallpaperaccess.com/full/6285167.jpg"
                }
                alt={data.title ? data.title : data.name}
            />
            <PlayCircleOutlineTwoToneIcon className='play-icon'/>
            <div className='movie-info'>
                <span className='movie-info-title'>{data.title ? data.title : data.name}    </span>
                <span className='movie-info-original-title'>{data.original_title ? data.original_title : data.original_name}    </span>
            </div>
        </div>
    );
}