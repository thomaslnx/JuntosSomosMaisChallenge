import { useState, useEffect } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  const ranges = [];

  while (i <= to) {
    ranges.push(i);
    i += step;
  }

  return ranges;
};

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  let { totalUsers, pageLimit, pageNeighbors } = props;

  totalUsers = typeof totalUsers === 'number' ? totalUsers : 200;
  pageLimit = typeof pageLimit === 'number' ? pageLimit : 9;

  pageNeighbors =
    typeof pageNeighbors === 'number'
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0;

  const pagesTotal = Math.ceil(totalUsers / pageLimit);

  const gotoPage = (page) => {
    const { onPageChanged = (f) => f } = props;

    const atualPage = Math.max(0, Math.min(page, pagesTotal));

    const paginationData = {
      atualPage,
      pagesTotal,
      pageLimit,
      totalUsers,
    };
    setCurrentPage(atualPage);
    onPageChanged(paginationData);
  };

  useEffect(() => {
    gotoPage(1);
  }, []);

  const handleClick = (page, evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbors * 2 - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbors * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (pagesTotal > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbors;
      const rightBound = currentPage + pageNeighbors;
      const beforeLastPage = pagesTotal - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, pagesTotal];
    }

    return range(1, pagesTotal);
  };

  if (!totalUsers) return null;

  if (pagesTotal === 1) return null;

  const pages = fetchPageNumbers();

  return (
    <nav aria-label="Members Pagination">
      <h1>Pagination</h1>
      <ul className="pagination">
        {pages.map((page, index) => {
          console.log('Paginations');
          if (page === LEFT_PAGE)
            return (
              <li key={index} className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo;</span>
                  {/* <span className="sr-only">Previous</span> */}
                </a>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={handleMoveRight}
                >
                  <span aria-hidden="true">&raquo;</span>
                  {/* <span className="sr-only">Next</span> */}
                </a>
              </li>
            );

          return (
            <li
              key={index}
              className={`page-item${currentPage === page ? ' active' : ''}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handleClick(page, e)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;