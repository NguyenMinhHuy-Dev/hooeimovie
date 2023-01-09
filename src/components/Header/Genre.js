import { useEffect, useState } from "react";

export const Genre = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = () => {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then(async (data) => {   
                await setGenres(data.genres);  
            })
            .catch((err) => {
                console.log(err); 
            });
        };

        getGenres(); 
    }, []);

    return (
        <div className='header-list-item genre'>
            <span>Genre</span>
            <ul className="genre-list">
                {genres.map((item) => {
                    return (
                        <li key={item.id} className="genre-item">{item.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}