import { useState } from 'react';
import './newArticle.scss';

export const NewArticle = () => {

  const [imageName, setImageName] = useState('No image selected');

  const uploadImage = (e) => {
    setImageName(e.target.value);
  }

  const sendForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className='new-articles-container'>
      <div className="form-container">
        <form className='new-article-form' onSubmit={sendForm}>
          <input className='form-element' type='text' name='title' placeholder='Blog title' />
          <textarea className='form-element text-area' type='text' name='content' placeholder='Blog content' />
          <input className='form-element form-img' type='file' name='image' aria-label='image' onChange={uploadImage} />
          <label className=""><center>{imageName}</center></label>

          <button className='form-element form-confirm-btn'>Confirm</button>
        </form>
      </div>
    </div>
  )
}
