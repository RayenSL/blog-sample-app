type Props = {
    previous: () => void;
    next: () => void;
}

export const Pagination = (props: Props) =>
    <div className="flex justify-center">
        <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                    href="#" onClick={props.previous}>Previous</a></li>
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">1</a></li>
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">2</a></li>
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#">3</a></li>
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href="#" onClick={props.next}>Next</a></li>
            </ul>
        </nav>
    </div>

