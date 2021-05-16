import React, { useState, useEffect } from 'react'

export const useFetch = (url, method, body = null) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [numberOfFetchs, setNumberOfFetchs] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        setError(null)
        setData(null)
        fetch(url, {
            method: method,
            body
        })
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [numberOfFetchs])

    return {
        data: data,
        isLoading: isLoading,
        error: error,
        fetchAgain: () => setNumberOfFetchs(x => x+1)
    }
}