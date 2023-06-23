import { useParams } from 'react-router-dom';
import './Watch.css';
import { useEffect, useState } from 'react';
import { Detail } from '../Detail/Detail';
import { Similar } from '../Detail/Similar/Similar';

export const Watch = () => {
    const { media_type, id, season_number, episode } = useParams(); 

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false); 

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollTop();
    },[])

    useEffect(() => {
        const getDetailMovie = async (media_type, id) => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((details) => {  
                setData(details);
                setLoading(false);  
            })
            .catch((err) => {
                setLoading(false);
            });
        };  

        setLoading(true);
        scrollTop();
        getDetailMovie(media_type, id); 
    }, [id, media_type])
    return ( 
        <> 
            <div className='watch container'>
                <div className='watch-player-episode'>
                    <div className={`watch-left ${media_type === 'movie' && 'full'}`}>
                        <iframe
                            name="framez" 
                            id="framez"
                            width="100%"
                            height={"100%"}
                            src={`https://vidsrc.me/embed/${id}`}
                            title="Movie player"
                            // sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" 
                            frameBorder="0" 
                            gesture="media" 
                            allow="encrypted-media" 
                            allowFullScreen
                            
                        />
                    </div>

                    {media_type === 'tv' && 
                        <div className='watch-right'>

                        </div> 
                    }
                </div> 
                
                <Similar />
            </div>   
        </>
    );
}