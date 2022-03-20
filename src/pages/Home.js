import Table from "../components/Table";
import useFetch from "../utils/api";

export default function Home() {
    const { data, loading, error } = useFetch(
        "https://api.coingecko.com/api/v3/exchanges?per_page=10"
    );

    return (
        <>
            {loading && <p>{loading}</p>}
            {error && <p>{error}</p>}
            {data && <Table data={data}></Table>}
        </>
    );
}
