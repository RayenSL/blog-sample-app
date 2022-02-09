import { BlogCard } from '@/components/cards/BlogCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Tabs } from '@/components/tabs/Tabs';
import { useBlog } from '@/hooks/useBlog';
import { BlogItem } from '@/utils/types';
import React from 'react';
import UnderlineLink from '@/components/links/UnderlineLink';
import ReactPaginate from 'react-paginate';

export default function Blog() {
  const [amount, setAmount] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const { blog: data, getCategories, addBlogItem } = useBlog(page, amount);

  console.log(data);

  const next = () => {
    setPage((currentpage) => (currentpage += 1));
  };

  const handleChangePage = (e: any) => {
    setPage(e.selected + 1);
  };

  const previous = () => {
    setPage((currentpage) => (currentpage -= 1));
  };

  return (
    <Layout>
      <Seo />
      <section className='bg-gray-100'>
        {/*  Header  */}
        <div>
          <img
            className='w-full h-auto'
            src={'/images/header.png'}
            alt='image'
          />
          <div className='absolute top-1/4 left-2/4 text-5xl font-bold text-white'>
            <p className=''>Blog</p>
          </div>
          <div className='absolute top-10 right-10'>
            <Tabs active='blog' />
          </div>
        </div>
        <div className='layout min-h-screen bg-white'>
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
            <div className='pt-10'>
              <ReactPaginate
                breakLabel='...'
                previousLabel=''
                nextLabel='Volgende pagina ->'
                pageCount={data?.last_page || 0}
                onPageChange={handleChangePage}
                containerClassName='pagination'
                nextLinkClassName='pagination__link'
                activeClassName='pagination__link--active'
                pageClassName={'pagination__item'}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-14 text-center bg-black'>
          <footer className='m-auto text-white'>
            <UnderlineLink href='https://socialbrothers.nl/'>
              © Copyright Social Brothers
            </UnderlineLink>
            - {new Date().getFullYear()}
          </footer>
        </div>
      </section>
    </Layout>
  );
}
