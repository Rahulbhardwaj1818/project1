import{useEffect}from"react";
import { useState } from "react";
import NewsItem from "./NewsItem"
const Newsbar = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    console.log('Fetching articles with key:', key);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, [category])

  return (
    <div>
      <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => {
       return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
})}
    </div>
  );
};

export default Newsbar;