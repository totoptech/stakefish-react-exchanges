import { useEffect, useState } from "react";
import Table from "../components/Table";

export default function Home() {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/exchanges?per_page=10")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setExchanges(data);
            });
    }, []);

    return <Table data={exchanges}></Table>;
}
