import { useEffect } from "react";
import { Banner } from "../Banner/Banner";
import { MovieSection } from "../Section/MovieSection";
import { SlideMovie } from "../Slide/SlideMovie";
import { SlideTV } from "../Slide/SlideTV";
import { Title } from "../Title/Title";
import './Home.css';

export const Home = () => {

    return (
        <div className="home-page">
            <Title title={"Hooei's Movie | The best website for watch movies"}/>
            <Banner />
            <div className="container">
                <SlideMovie type="trending" />
                <MovieSection type="popular" />
                <MovieSection type="top_rated" />
                <SlideTV type="trending" />
            </div>
        </div>
    );
}