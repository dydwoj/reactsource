import { useEffect, useState } from "react";
import { getList, putAvailableBook } from "../api/bookApi";

export const useFetch = () => {
  const initState = {
    current: 0,
    dtoList: [],
    next: false,
    falsenextPage: 0,
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    prevPage: 0,
    totalCount: 0,
    totalPage: 0,
  };

  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleAvailable = (id, curAvailable) => {
    putAvailableBook({ id: id, available: !curAvailable }).then((data) => {
      // 한번 누르면 서로 반대라 available 벨류를 반대로 줌
      console.log(data);
    });
  };

  // 전체 리스트
  useEffect(() => {
    getList()
      .then((result) => {
        console.log(result);

        setData(result);

        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return { data, loading, error, toggleAvailable };
};
