import { useParams } from 'react-router-dom';
import './Watch.css';
import { useEffect } from 'react';

export const Watch = () => {
    const { media_type, id, season_number, episode } = useParams(); 

    return (
        <div className='watch container'>
            <div className='watch-player-episode'>
                <div className='watch-left'>
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

                <div className='watch-right'>

                </div> 
            </div>
        </div>
    );
}