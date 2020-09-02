import React from 'react';

const Pagination = ({ totalElements, pageSize, changePage, currentPage }) => {
  const getPages = () => {
    const pages = [];
    let pageNumber = 0;
    while (pageNumber * pageSize < totalElements) {
      pages.push(pageNumber);
      pageNumber++;
    }

    return pages;
  };

  const buttons = getPages().map((i) => (
    <button
      key={i}
      data-test="paginationButton"
      className={`o-app__paginationButton ${
        i === currentPage ? '-selected' : ''
      }`}
      onClick={() => changePage(i)}
    >
      {i + 1}
    </button>
  ));

  return (
    <div className="o-app__paginationWrapper">
      {currentPage !== 0 && (
        <button
          className="o-app__paginationButton"
          onClick={() => changePage(currentPage - 1)}
        >
          &lt;
        </button>
      )}

      {buttons}

      {currentPage !== Math.ceil(totalElements / pageSize) - 1 && (
        <button
          className="o-app__paginationButton"
          data-test="nextPageButton"
          onClick={() => changePage(currentPage + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
