import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Exchange() {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((dt) => {
                setData(dt);
                console.log("I am dat", dt);
            });
    }, [id]);

    return <>{id}</>;
}
