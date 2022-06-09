import React from 'react';
import {Pagination} from 'react-bootstrap'

function Paginate({movies, currentPage, itemsPerPage, changePage}) {
  return (
    <Pagination>
    <Pagination.First onClick={()=>changePage(1)}/>
    <Pagination.Prev disabled={currentPage===1 ? true : false} onClick={()=>changePage(currentPage > 1 ? currentPage-1 : 1)}/>
    <Pagination.Item onClick={()=>changePage(currentPage > 5 ? currentPage-4 : 1)}>{currentPage > 5 ? currentPage-4 : 1}</Pagination.Item>
   
    <Pagination.Item onClick={()=>changePage(currentPage > 5 ? currentPage-3 : 2)}>{currentPage > 5 ? currentPage-3 : 2}</Pagination.Item>
    <Pagination.Item onClick={()=>changePage(currentPage > 5 ? currentPage-2 : 3)}>{currentPage >5 ? currentPage-2 : 3}</Pagination.Item>
    <Pagination.Item active={currentPage ? true : false} onClick={()=>changePage(currentPage > 5 ? currentPage-1 : 4)}>{currentPage > 5 ? currentPage-1 : 4}</Pagination.Item>
    <Pagination.Item  onClick={()=>changePage(currentPage > 5 ? currentPage : 5)}>{currentPage > 5 ? currentPage : 5}</Pagination.Item>
    <Pagination.Next disabled={currentPage===Math.ceil(movies.length/itemsPerPage) ? true : false} onClick={()=>changePage(currentPage<Math.ceil(movies.length/itemsPerPage) ? currentPage+1 : Math.ceil(movies.length/itemsPerPage))} />
    <Pagination.Last onClick={()=>changePage(Math.ceil(movies.length/itemsPerPage))}/>
  </Pagination>
  )
}

export default Paginate