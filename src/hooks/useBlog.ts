import useSWR, { Fetcher, Middleware, SWRHook } from 'swr';
import { Blog, BlogItem } from '@/utils/types';
import { post, get } from '@/utils/helpers';

const baseUrl = 'https://frontend-case-api.sbdev.nl/api';

type CreateItemProps = {
  title: string;
  content: string;
  category_id: number;
  image: string;
};

export const useBlog = (page: number, amount: number) => {
  console.log(page + " " + amount)
  const {
    data: blog,
    mutate,
    error,
    isValidating: loading,
  } = useSWR<Blog>(`${baseUrl}/posts?page=${page}&perPage=${amount}`);

  const addBlogItem = async (item: CreateItemProps) => {
    return post(`${baseUrl}/posts`, item).then(() => mutate());
  };

  const getCategories = async () => {
    return get(`${baseUrl}/categories`)
  }

  return { blog, mutate, error, loading, addBlogItem, getCategories };
};
