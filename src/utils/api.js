import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((dt) => {
                setLoading(false);
                setData(dt);
            })
            .catch((err) => {
                setLoading(false);
                setError("An error occurred. Awkward..");
            });
    }, [url]);

    return { data, loading, error };
}
