// 페이지 나누기 (이동)

import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) return defaultValue;
  return parseInt(param);
};

const useCustomMove = () => {
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  // 쿼리스트링 가져오기
  const [queryParams] = useSearchParams();

  // ?page=1&size=10&keyword= 가져오기
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const genre = getNum(queryParams.get("genre"), 0);
  const keyword = queryParams.get("keyword") || "";

  const queryDefault = createSearchParams({ page, size, genre, keyword }).toString();

  // 페이지 이동 방법

  // 방법 1. : http://localhost:5173/books/api?page=1&size=10&genre=&keyword=

  // 방법 2. : moveToList({page:1, size:20, genre:1, keyword:'자바'})

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      const page = pageParam.get("page", 1);
      const size = pageParam.get("size", 10);
      const genre = pageParam.get("genre", 0);
      const keyword = pageParam.get("keyword", "");

      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }
  };

  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };

  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToDetail, moveToEdit, page, size, genre, keyword };
};

export default useCustomMove;
