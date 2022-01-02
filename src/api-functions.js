import react, { useState, useEffect } from "react";
import "./App.css";

//https://api.github.com/users/fabiannb8

function ApiFunctions({ login }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

    return <div>
        <h2 className="subTitle">Fetchin data with hooks</h2>
        <h1>{data.name}</h1>
        <h2>{data.location}</h2>
        <p>{data.bio}</p>
        <img alt={data.login} src={data.avatar_url} width={200} />
    </div>;
}

export default ApiFunctions; 