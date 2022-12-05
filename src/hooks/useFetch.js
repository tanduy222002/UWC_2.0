import { useState, useEffect } from 'react'
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-type": "application/json"
    }
});

export function useFetch(url) {
    const [data, setData] = useState()

    useEffect(() => {
        api.get(url).then((res) => {
            console.log(res.data);
            const newData = res.data
            setData(newData)
        })
    }, [])
}