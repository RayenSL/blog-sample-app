import useSWR, { Fetcher, Middleware, SWRHook } from "swr";
import {Blog} from "@/utils/types";

const baseUrl = "https://frontend-case-api.sbdev.nl/api"

export const useBlog = () => {
    const {
        data: blog,
        mutate,
        error,
        isValidating: loading,
    } = useSWR<Blog>(`${baseUrl}/posts?page=1&perPage=4` )

    return {blog, mutate, error, loading}
}
