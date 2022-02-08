type Props = {
  previous: () => void;
  next: () => void;
};

export const Pagination = (props: Props) => (
  <div className='flex justify-center'>
    <nav aria-label='Page navigation example'>
      <ul className='list-style-none flex'>
        <li className='page-item'>
          <a
            className='page-link block relative px-3 py-1.5 text-gray-800 bg-transparent rounded rounded border-0 transition-all duration-300 outline-none hover:text-gray-800 focus:shadow-none'
            href='#'
            onClick={props.previous}
          >
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a
            className='page-link block relative px-3 py-1.5 text-gray-800 bg-transparent rounded rounded border-0 transition-all duration-300 outline-none hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
            href='#'
          >
            1
          </a>
        </li>
        <li className='page-item'>
          <a
            className='page-link block relative px-3 py-1.5 text-gray-800 bg-transparent rounded rounded border-0 transition-all duration-300 outline-none hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
            href='#'
          >
            2
          </a>
        </li>
        <li className='page-item'>
          <a
            className='page-link block relative px-3 py-1.5 text-gray-800 bg-transparent rounded rounded border-0 transition-all duration-300 outline-none hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
            href='#'
          >
            3
          </a>
        </li>
        <li className='page-item'>
          <a
            className='page-link block relative px-3 py-1.5 text-gray-800 bg-transparent rounded rounded border-0 transition-all duration-300 outline-none hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
            href='#'
            onClick={props.next}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
