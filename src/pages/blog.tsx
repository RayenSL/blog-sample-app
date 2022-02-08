import { BlogCard } from '@/components/cards/BlogCard';
import Layout from '@/components/layout/Layout';
import { Pagination } from '@/components/pagination/Pagination';
import Seo from '@/components/Seo';
import { Tabs } from '@/components/tabs/Tabs';
import { useBlog } from '@/hooks/useBlog';
import { BlogItem } from '@/utils/types';
import React from 'react';

export default function Blog() {
  const [amount, setAmount] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const { blog: data, getCategories, addBlogItem } = useBlog(page, amount);

  const next = () => {
    console.log(10);
    setPage((currentpage) => (currentpage += 1));
  };

  const previous = () => {
    console.log(11);
    setPage((currentpage) => (currentpage -= 1));
  };

  return (
    <Layout>
      <Seo />
      <section className='bg-gray-100' />
      {/*  Header  */}
      <div>
        <img className='w-full h-auto' src={'/images/header.png'} alt='image' />
        <div className='absolute top-1/4 left-2/4 text-5xl font-bold text-white'>
          <p className=''>Blog</p>
        </div>
        <div className='absolute top-10 right-10'>
          <Tabs active='blog' />
        </div>
      </div>

      <div className='layout min-h-screen'>
        <div className='px-32 py-32'>
          <div className='grid grid-cols-4 gap-10'>
            {data ? (
              data.data.map((item: BlogItem, index: number) => (
                <BlogCard key={index} blogItem={item} />
              ))
            ) : (
              <h1>Nog geen blogs!</h1>
            )}
          </div>
        </div>
        <Pagination next={next} previous={previous} />
      </div>
    </Layout>
  );
}
