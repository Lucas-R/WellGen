import { api } from "@/utils/axios";
import { useEffect, useState } from "react";

export default function useFetch<T>(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);
    
    async function handleFetch() {
        try {
            const response = await api(endpoint);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        handleFetch();
    }, []);

    return { data, error, isLoading };
}