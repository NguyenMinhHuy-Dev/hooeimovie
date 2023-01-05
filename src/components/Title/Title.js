import { useEffect } from "react";

export const Title = ({ title }) => {
    useEffect(() => {
        document.title = title || "Hooei's Movie | Best website for watch movies";
    })

    return <></>;
}