import { useParams } from 'react-router-dom';
import './Trailer.css';
import { useEffect, useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export const Trailer = ({isTrailer, setIsTrailer}) => {
    const { media_type, id } = useParams();
    const [trailer, setTrailer] = useState({});

    useEffect(() => { 
        const getTrailer = (media_type, id) => {
            fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setTrailer(data.results.find(item => item.name === "Official Trailer"));
                console.log(data.results )
                // console.log(data.results.find(item => item.name === "Official Trailer"))
            })
            .catch((err) => {
                console.log(err);
            });
        };
 
        getTrailer(media_type, id);
    }, [id, media_type])

    return (
        <>
            <div className="trailer-content">   
                <iframe
                    style={{
                        minHeight: "100vh",
                    }}
                    width="100%" 
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&loop=1&color=black&modestbranding=1&playsnline=1&rel=0&controls=0&enablejsapi=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                /> 
            </div>
            <div className='trailer-quit'>
                <div className='trailer-quit-icon' onClick={e => setIsTrailer(isTrailer => !isTrailer)}>
                    <ClearRoundedIcon className='icon'/>
                </div>
            </div>
        </> 
    );
}