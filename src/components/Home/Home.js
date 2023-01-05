import { useEffect } from "react";
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";

export const Home = () => {

    return (
        <div className="home-page">
            <Title title={"Hooei's Movie | Best website for watch movies"}/>
            <Banner />
            <div style={{height: '1000px'}}>

            </div>
        </div>
    );
}