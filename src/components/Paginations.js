import React,{ useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from 'react-redux'
import { getPages } from "../redux/actions/movieAction";

const Paginations = () => {

  const [pageCount,setPageCount]=useState(0)
  const dispatch=useDispatch(); 
  const pages =useSelector((state)=> state.pageCount);
  useEffect(()=> {
    setPageCount(pages)
  },[])

  // get CURRENT PAGE

  const handlePageClick =(data)=>{ 
    dispatch(getPages(data.selected+1))  
  }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous"
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
  />   
  )
}

export default Paginations