import {useState, useEffect} from 'react';
import {getData} from "./../api/apiCalls";
import { CARTOONS2D_URL } form "./"


const Cartoons2D = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);
  getData(CARTOONS2D_URL)
  .then(data => setArticles(data))

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  )
}

export default Cartoons2D
