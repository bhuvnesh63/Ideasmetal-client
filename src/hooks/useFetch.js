import { useEffect, useState } from "react";
import {fetchData} from '../utils/api'


const useFetch = (endpoint) => {
    const [data, setData] = useState();
    // const [date, setDate] = useState();


    useEffect(() => {
        makeApiCall();
        // makeApiCal();
    },[endpoint]);

    const makeApiCall = async () => {
        const res = await fetchData(endpoint);
        setData(res);
    }
    // const makeApiCal = async () => {
    //     const res = await fetchData(endpoint);
    //     setDate(res);
    // }

    // return {data,date};
    return { data };
}

export default useFetch;

