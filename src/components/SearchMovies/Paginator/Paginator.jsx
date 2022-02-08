import React, { useEffect, useState, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchMovie } from '../../../store/movie/movieFetchAction';
import './Paginator.scss';

//const items = [...Array(200).keys()];

// function Items({ currentItems }) {
//   return (
//     <div className="items">
//     {currentItems && currentItems.map((item) => (
//       <div>
//         <h3>Item #{item}</h3>
//       </div>
//     ))}
//       </div>
//   );
// }

export function PaginatedItems({ itemsPerPage }) {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const movieSelector = useSelector(state => state.movie);
  const itemsAll = Number(movieSelector.totalResults) || 1;
  const items = useMemo(() => [...Array(itemsAll).keys()], [itemsAll]);
  
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
     // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
//    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => { 
    const newOffset = event.selected * itemsPerPage % items.length;
  //  console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    
    url.hash = event.selected + 1;
    window.history.replaceState({page:5},'JavaScript', url.href); 

    dispatch(fetchMovie(
      url.searchParams.get('title') || 'terminator', 
      url.searchParams.get('type') || 'all',
      url.hash.slice(1) || 1
    ));
 
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */ }
      <div className='items'>{currentItems}</div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
