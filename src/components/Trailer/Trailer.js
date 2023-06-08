import { useParams } from 'react-router-dom';
import './Trailer.css';
import { useEffect, useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export const Trailer = () => {
    const { media_type, id } = useParams();
    const [trailer, setTrailer] = useState({});

    useEffect(() => { 
        const getTrailer = (media_type, id) => {
            fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setTrailer(data.results.find(item => (item.name.includes("Official Trailer") || item.name.includes("Final Trailer") || item.name.includes("Trailer") || item.name.includes("Official"))));
                console.log(data.results);
            })
            .catch((err) => {
                console.log(err);
            });
        };
 
        getTrailer(media_type, id);
    }, [id, media_type])

    return (
        <>
            {trailer &&  
                <div className="trailer-content">   
                    <iframe
                        style={{
                            height: "calc(100vh - 70px)",
                            pointerEvents: "none",
                            userSelect: "none",
                        }}
                        width="100%"  
                        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&loop=1&color=white&rel=0&controls=0&playlist=${trailer.key}`}
                        title="YouTube video player"
                        referrerpolicy="no-referrer-when-downgrade"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    /> 
                </div>   
            }
        </> 
    );
}