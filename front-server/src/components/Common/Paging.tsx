import React from 'react'
import '../../assets/styles/Common/paging.css'
import Pagination from 'react-js-pagination'

type pagetype = {
  page: number
  count: number
  setPage: (pageNumber: number) => void
  size: number
}

function Paging({ page, count, setPage, size }: pagetype) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={size}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={setPage}
    />
  )
}
export default Paging
