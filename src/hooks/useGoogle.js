import { useState, useEffect } from 'react';
import API_KEY from '../../keys';

const SEARCH_ENGINE_ID = "bb0a10caaec3def65";

const useGoogle = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapi.com/customsearch/v1?key=${API_KEY}$cx=${SEARCH_ENGINE_ID}&q=${term}`).then((res) => {
                res.json()
                    .then((result) => setData(result))
                    .catch((err) => {
                        console.log(err);
                    })
            })
        }
        fetchData();
    }, [])

    return { data };
};

export default useGoogle;
