import * as React from 'react';
import { useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { useBlog } from '@/hooks/useBlog';
import { BlogItem } from '@/utils/types';
import { CreateBlogForm } from '@/components/forms/CreateBlogForm';
import { BlogCard } from '@/components/cards/BlogCard';
import { Tabs } from '@/components/tabs/Tabs';

export default function HomePage() {
  const [amount, setAmount] = React.useState(4);
  const [categories, setCategories] = React.useState([]);
  const { blog: data, getCategories, addBlogItem } = useBlog(1, amount);

  useEffect(() => {
    getCategories().then((x) => setCategories(x));
  }, []);

  const onSubmitBlog = async (e: any) => {
    // Temp solution for images
    e.image = e.image[0].name;

    return await addBlogItem(e);
  };

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-gray-100'>
          {/*  Header  */}
          <div>
            <img
              className='w-full h-auto'
              src={'/images/header.png'}
              alt='image'
            />
            <div className='absolute top-10 right-10'>
              <Tabs active='home' />
            </div>
          </div>

          {/* Content */}
          <div className='layout min-h-screen'>
            <div className='grid grid-cols-2 gap-10 py-16'>
              {/* Create Blog */}
              <div className='px-16 pt-12 w-full text-left bg-white'>
                <h1>Plaats een blog bericht</h1>
                <CreateBlogForm
                  categories={categories}
                  onSubmit={onSubmitBlog}
                />
              </div>
              {/* Blogs */}
              <div className='bg-white'>
                <div className='grid grid-cols-2 grid-rows-2 gap-10 px-10 py-10'>
                  {data ? (
                    data.data.map((item: BlogItem, index: number) => (
                      <BlogCard key={index} blogItem={item} />
                    ))
                  ) : (
                    <h1>Nog geen blogs!</h1>
                  )}
                </div>

                <div className='form-control flex justify-center pt-10'>
                  <button
                    type='button'
                    className='btn-primary px-28 py-3.5'
                    onClick={() => setAmount((am) => (am += 4))}
                  >
                    Meer laden
                  </button>
                </div>
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
      </main>
    </Layout>
  );
}
