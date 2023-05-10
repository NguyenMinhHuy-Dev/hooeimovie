import { useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import './Detail.css';
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const Detail = () => { 
    const { media_type, id } = useParams();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDetailMovie = async (media_type, id) => {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((details) => {
                console.log(details)
                setData(details);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
        };

        setLoading(true);
        getDetailMovie(media_type, id);
    }, [id, media_type])

    return (
        <div className="container container-detail">
            <Title title={`${data.name || data.title}`}/>
            {/* <Banner /> */}
            <Loading />
        </div>
    );
}