import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Props = {
  onSubmit: (e: any) => void;
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
        htmlFor='messageName'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Berichtnaam
      </label>
      <input
        {...register('messageName', { required: true, maxLength: 20 })}
        className='form-control block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id='messageName'
        placeholder='Geen titel'
      />
      {errors.messageName?.type === 'required' &&
        toast.error('message is required')}

      <label
        htmlFor='category'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Categorie
      </label>
      <select
        className='form-select block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 bg-no-repeat border border-gray-300 border-solid transition ease-in-out appearance-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        aria-label='category'
      >
        <option selected>Geen Categorie</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>

      <label
        htmlFor='formFile'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Header Afbeelding
      </label>

      <input
        className='w-30 block text-sm text-gray-700 bg-gray-50 bg-gray-100 border border-gray-300 cursor-pointer focus:border-transparent focus:outline-none'
        id='formFile'
        type='file'
        accept='image/*'
      />

      <label
        htmlFor='message'
        className='form-label inline-block pt-10 mb-2 text-gray-700'
      >
        Bericht
      </label>

      <textarea
        className='form-control block px-3 py-1.5 m-0 w-full text-base font-normal text-gray-700 bg-clip-padding bg-gray-100 border border-gray-300 border-solid transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        id='message'
        rows={15}
      />

      <div className='form-control flex justify-center py-14'>
        <button type='submit' className='btn-primary px-28 py-3.5'>
          Bericht aanmaken
        </button>
      </div>
    </form>
  );
};
