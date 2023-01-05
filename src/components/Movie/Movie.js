import { ImageFade } from '../Loading/ImageLoading';
import './Movie.css';

export const Movie = ({ data }) => {
    const { poster_path } = data;

    return (
        <div className='movie'>
            <ImageFade 
                lazy_src={
                    poster_path
                    ?  `https://image.tmdb.org/t/p/w500${poster_path}`
                    : "https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                alt={data.title ? data.title : data.name}
            />
            <div className='movie-info'>
                <span className='movie-info-title'>{data.title ? data.title : data.name}    </span>
                <span className='movie-info-original-title'>{data.original_title ? data.original_title : data.original_name}    </span>
            </div>
        </div>
    );
}