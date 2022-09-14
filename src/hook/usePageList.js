import { useEffect, useState } from "react";

export default function usePageList(page) {
    const [apiData, setApiData] = useState([])
    const [metaData, setMetaData] = useState({})
    const [status, setStatus] = useState("unloaded")

    useEffect(() => {
        requestEmployee()
        async function requestEmployee() {
            setApiData([])
            setStatus("loading")

            const result = await fetch(`https://gorest.co.in/public-api/users?page=${page}`, {
                method: "GET"
            })

            const json = await result.json()

            setMetaData(json.meta.pagination)
            setApiData(json.data)
            setStatus("loaded")
        }
    }, [page])
    return [apiData, metaData, status]
}