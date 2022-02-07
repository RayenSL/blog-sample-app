import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { useBlog } from '@/hooks/useBlog';
import { BlogItem } from '@/utils/types';
import { CreateBlogForm } from '@/components/forms/CreateBlogForm';

export default function HomePage() {
  const [amount, setAmount] = React.useState(4);
  const { blog: data } = useBlog(1, amount);
  console.log(data);

  const onSubmitBlog = (e: any) => {
    console.log(e);
    return;
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
              src={
                'https://via.placeholder.com/1920x400.jpg?text=Social+Brothers+Banner'
              }
              alt='image'
            />
          </div>

          {/* Content */}
          <div className='layout min-h-screen'>
            <div className='grid grid-cols-2 gap-10 py-16'>
              {/* Create Blog */}
              <div className='px-16 pt-12 w-full text-left bg-white'>
                <h1>Plaats een blog bericht</h1>
                <CreateBlogForm onSubmit={onSubmitBlog} />
              </div>
              {/* Blogs */}
              <div className='bg-white'>
                <div className='grid grid-cols-2 grid-rows-2 gap-10 px-10 py-10'>
                  {data ? (
                    data.data.map((item: BlogItem, index: number) => (
                      <div key={index} className='max-w-sm bg-white shadow-lg'>
                        <a>
                          <img
                            className='ob w-full max-h-28'
                            src={
                              'https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp'
                            }
                            alt=''
                          />
                        </a>
                        <div className='p-6 pb-40'>
                          <h5 className='mb-2 text-3xl font-medium text-gray-900'>
                            {item.title}
                          </h5>
                          <p className='mb-4 text-base text-gray-400'>
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1>Loading...</h1>
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
