import { useEffect, useState } from 'react';
import './articles.scss';
import { getArticles } from '../../services/apiCalls';
import { Loader } from '../loader/Loader';
import { SingleArticle } from '../singleArticle/SingleArticle';

export const Articles = () => {

  const [showArticles, setShowArticles] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getArticles().then(( {data} ) => {
      setShowArticles(data.articles);
      setIsLoading(true);
    });

  }, []);

  return (
    <div className='blogs-articles-container'>
      <div className="articles-container">
        {isLoading ? (
           showArticles.map((article) => {
            return ( <SingleArticle key={article.id} article={article} /> )
          })
        ) : (
          <Loader />
        )}
        
      </div>
    </div>
  )
}