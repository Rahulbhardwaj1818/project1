import { useState } from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Newsbar from './Component/Newsbar';
import NewsItem from './Component/NewsItem';


function App() {
  const[category,setCategory]=useState("general");
  return (
  <>
<NavBar setCategory={setCategory}/>
<Newsbar category={category}/>
<NewsItem/>
    </>
  );
}

export default App;
