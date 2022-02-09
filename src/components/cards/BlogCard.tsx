import { BlogItem } from '@/utils/types';

type Props = {
  blogItem: BlogItem;
};

export const BlogCard = (props: Props) => {
  return (
    <div className='max-w-sm bg-white shadow-lg'>
      <div className='relative'>
        <img
          className='w-full max-h-32'
          src={'https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp'}
          alt=''
        />
        <div>
          <p className='absolute left-5 top-24 text-xs italic text-white'>
            {new Date(props.blogItem.created_at).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p className='absolute right-5 top-24 text-xs italic text-white'>
            {props.blogItem.category.name}
          </p>
        </div>
      </div>
      <div className='p-2 pb-40'>
        <h5 className='mb-2 text-3xl font-medium text-gray-900'>
          {props.blogItem.title}
        </h5>
        <p className='mb-4 text-base text-gray-400'>{props.blogItem.content}</p>
      </div>
    </div>
  );
};
