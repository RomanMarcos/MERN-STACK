import './articles.scss';

export const Articles = () => {
  return (
    <div className='blogs-articles-container'>
      <div className="articles-container">
        {/* the 'articles' structure is the one to clone to list more articles */}
        <div className='articles'>
          <div className='articles-img'>
            <img src='image.png' alt='blog-image' />
          </div>
          <div className='articles-content'>
            <h1 className='articles-title'>Blog title</h1>
            <h2 className='articles-description'>Blog description</h2>
          </div>
        </div>
        
      </div>
    </div>
  )
}