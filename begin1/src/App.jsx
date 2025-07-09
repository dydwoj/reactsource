import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Card from "./Card";
import Product from "./Product";
import ParentCardLayout from "./ParentCardLayout";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputMultipleSample from "./InputMultipleSample";
import Say from "./Say";
import Movie from "./Movie";
import Hello from "./components/Hello";
import Home from "./components/Home";
import MyButton from "./components/MyButton";
import MyApp from "./components/MyApp";
import CounterRef from "./CounterRef";
import InputRef from "./InputRef";
import UserProfile from "./UserProfile";
import Form from "./Form";
import Life from "./Life";
import FetchBook from "./FetchBook";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Average from "./Average";
import Parent from "./Parent";
import BookList from "./BookList";
import AdGenerator from "./AdGenerator";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
       <h1>World</h1>
       <Product />
       <MyComponent name="React">리액트</MyComponent>
       <ParentCardLayout />
       <InputMultipleSample />
       <Movie />
       <Say />
       <MyApp />
       <InputRef />
       <UserProfile />
      <Form />
      <Life />
      <FetchBook />
      <Memo />
      <Average />
      <Parent />
      <Card /> */}
      <AdGenerator />
    </>
  );
}

export default App;
