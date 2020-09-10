import React, { useState, useEffect } from 'react';
import style from './PagesSelect.module.scss';

const PagesSelect = ({ pageSelectHandler, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  useEffect(() => {
    pageSelectHandler(currentPage);
    setIndexes(2);
  }, [currentPage]);

  const allPagesArr = [];
  for (let i = 1; i <= limit; i++) {
    allPagesArr.push(i);
  }

  const MapPages = () => {
    return allPagesArr.slice(startIndex, endIndex).map((el) => {
      return (
        <button onClick={() => {setCurrentPage(el)}}
          className={currentPage === el ? style.current : null}
          key={el}
        >
          {el}
        </button>
      );
    });
  };

  function setIndexes(width) {
    if (width >= limit) {
      setStartIndex(0);
      setEndIndex(limit);
      console.log(limit - 1);
    } else if (currentPage - width < width) {
      setStartIndex(0);
      setEndIndex(width * 2 + 1);
    } else {
      setStartIndex(currentPage - width - 1);
      if (currentPage + width >= limit) {
        setStartIndex(limit - width * 2 - 1);
        setEndIndex(limit);
      } else {
        setEndIndex(currentPage + width);
      }
    }
  }

  const firstHandler = () => {
    setCurrentPage(1);
  };
  const lastHandler = () => {
    setCurrentPage(allPagesArr.length);
  };
  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage < allPagesArr.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={style.pagination}>
      <button onClick={firstHandler}>first</button>
      <button onClick={prevHandler}>prev</button>
      <span>{!!startIndex && '. . . '}</span>
      <MapPages />
      <span>{endIndex != limit && '. . . '}</span>
      <button onClick={nextHandler}>next</button>
      <button onClick={lastHandler}>last</button>
    </div>
  );
};

export default PagesSelect;