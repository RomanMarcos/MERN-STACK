import PropTypes from 'prop-types';
import './singleArticle.scss';
import { env } from '../../../environment.js';

export const SingleArticle = ({ article }) => {

  return (
    <>
    <div className='articles' key={article.id}>
      <div className='articles-img'>
        <img src={`${env.API_URL}/image/${article.image}`} alt='blog-image' />
      </div>
      <div className='articles-content'>
        <h1 className='articles-title'>{article.title}</h1>
        <h2 className='articles-description'>{article.content}</h2>
      </div>
    </div>
    </>
  )
}

SingleArticle.propTypes = {
  article: PropTypes.object
}