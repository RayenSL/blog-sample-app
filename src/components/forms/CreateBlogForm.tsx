import { Category } from '@/utils/types';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Props = {
  onSubmit: (e: any) => void;
  categories: Category[]
};

export const CreateBlogForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (Object.keys(errors).length > 0) {
  }

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <label
        htmlFor='title'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Berichtnaam
      </label>
      <input
        {...register('title', { required: true, maxLength: 20 })}
        className='form-control block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id='messageName'
        placeholder='Geen titel'
      />
        {errors.title?.type === 'required' && <p className='text-red-700'>De titel is verplicht</p>}

      <label
        htmlFor='category_id'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Categorie
      </label>
      <select
        {...register('category_id')}
        className='form-select block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 bg-no-repeat border border-gray-300 border-solid transition ease-in-out appearance-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        aria-label='category_id'
        id='category_id'
      >
          <option value={0}>Geen Categorie</option>
          {props.categories.map((category: Category, index: number) => <option key={index} value={category.id}>{category.name}</option>)}
      </select>

      <label
        htmlFor='image'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Header Afbeelding
      </label>

      <input
        {...register('image')}
        className='w-30 block text-sm text-gray-700 bg-gray-50 bg-gray-100 border border-gray-300 cursor-pointer focus:border-transparent focus:outline-none'
        id='image'
        type='file'
        accept='image/*'
      />

      <label
        htmlFor='content'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Bericht
      </label>

      <textarea
        {...register('content', { required: true})}
        className='form-control block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 border border-gray-300 border-solid transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id='content'
        rows={15}
      />
        {errors.content?.type === 'required' && <p className='text-red-700' >Het Bericht is verplicht</p>}

      <div className='form-control flex justify-center py-14'>
        <button type='submit' className='btn-primary px-28 py-3.5'>
          Bericht aanmaken
        </button>
      </div>
    </form>
  );
};
