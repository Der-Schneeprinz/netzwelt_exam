"use client"

import { useEffect, useState } from "react"
import createTree from "@utils/handleTerritories";

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/territories/")
            .catch((error) => { 
                console.log("Failed to get terretories.\n", error);
                return "Failed to terretories.";
            });
            const temp = await response.json();
            return temp;
        }
        fetchData().then((res) => {
            setData(res);
        });
    }, []);

    return (<>
        <div className="card">
            <h1 className="text-3xl font-bold">
                { data ? console.log(createTree(data)) : "fetching..." }
            </h1>
        </div>
    </>)
}

export default Home