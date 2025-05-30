import React from "react";
import BookList from "../components/BookList";
import useCustomMove from "../hooks/useCustomMove";
import { genres } from "../util";

const Home = () => {
  const moveState = useCustomMove();

  // 검색창에서 사용할 정보 분해
  const { size, genre, keyword, moveToList } = moveState;

  return (
    <div>
      <header className="flex mb-6">
        <h1 className="grow-1 text-[32px]">Book List</h1>
        <div>
          <input
            // 검색어인 keyword 를 유지시키기 위힘
            value={keyword}
            type="text"
            // onChange 쪽에서는 바뀌는 값만 e.target.value 로 시킴
            onChange={(e) => moveToList({ page: 1, genre: genre, keyword: e.target.value })}
            placeholder="Search by Title or Author"
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm w-[200px] text-[0.9em] leading-tight"
          />
          <select
            // 장르의 키워드를 유지하기 위함 (search 쪽 컨디션 조건인 장르를 의미)
            value={genre}
            onChange={(e) => moveToList({ page: 1, genre: e.target.value, keyword: keyword })}
            name="genre"
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm ml-2 text-[0.9em] leading-tight"
          >
            <option value="0">All Genres</option>
            {genres.map((genre, idx) => (
              <option key={idx} value={idx + 1}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </header>
      <BookList moveState={moveState} />
    </div>
  );
};

export default Home;
