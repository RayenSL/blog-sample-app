import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import {useBlog} from "@/hooks/useBlog";
import {BlogItem} from "@/utils/types";

export default function HomePage() {
  const {blog: data} = useBlog();

  console.log(data)

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-gray-100'>

          {/*  Header  */}
          <div>
            <img className="w-full h-auto" src={"https://via.placeholder.com/1920x400.jpg?text=Social+Brothers+Banner"} alt="image" />
          </div>

          {/* Content */}
          <div className='layout min-h-screen'>
              <div className='py-16 grid grid-cols-2 gap-10'>

                  {/* Create Blog */}
                  <div className='bg-white px-16 pt-12 text-left w-full'>
                      <h1>Plaats een blog bericht</h1>
                      <form>
                          <label htmlFor="messageName"
                                 className="form-label pt-10 inline-block mb-2 text-gray-700"
                          >Berichtnaam</label>
                          <input
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                              bg-gray-100 bg-clip-padding transition
                              ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="messageName"
                              placeholder="Geen titel"
                          />

                          <label htmlFor="category"
                                 className="form-label pt-10 inline-block mb-2 text-gray-700"
                          >Categorie</label>
                          <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal
                          text-gray-700 bg-gray-100 bg-clip-padding bg-no-repeat border border-solid border-gray-300
                          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                          focus:border-blue-600 focus:outline-none" aria-label="category">
                              <option selected>Geen Categorie</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>

                          <label htmlFor="formFile"
                                 className="form-label pt-10 inline-block mb-2 text-gray-700"
                          >Header Afbeelding</label>

                          <input
                              className="block w-30 cursor-pointer bg-gray-50 border border-gray-300 text-gray-700
                              bg-gray-100 focus:outline-none focus:border-transparent text-sm"
                              id="formFile"  type="file" accept="image/*"/>

                          <label htmlFor="message"
                                 className="form-label pt-10 inline-block mb-2 text-gray-700"
                          >Bericht</label>

                          <textarea
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                              bg-gray-100 bg-clip-padding border border-solid border-gray-300 transition
                              ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600
                              focus:outline-none"
                              id="message"
                              rows={15}
                          />

                          <div className="form-control flex justify-center py-14">
                              <button type="button"
                                      className="btn-primary px-28 py-3.5">Bericht aanmaken
                              </button>
                          </div>
                      </form>
                  </div>
                  {/* Blogs */}
                  <div className='bg-white '>
                      <div className="grid grid-cols-2 grid-rows-2 px-10 py-10 gap-10">
                          {data ? data.data.map((item: BlogItem) =>
                          <div className="shadow-lg bg-white max-w-sm">
                              <a href="#!">
                                  <img className=""
                                       src={item.img_url} alt=""/>
                              </a>
                              <div className="p-6">
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                  <p className="text-gray-700 text-base mb-4">
                                      {item.content}
                                  </p>
                              </div>
                          </div>
                          ) : <h1>Loading...</h1>}
                      </div>

                      <div className="form-control flex justify-center ">
                          <button type="button"
                                  className="btn-primary px-28 py-3.5">Meer laden
                          </button>
                      </div>
                  </div>

              </div>
          </div>



          <div className='w-full h-14 bg-black flex justify-center items-center text-center'>
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
