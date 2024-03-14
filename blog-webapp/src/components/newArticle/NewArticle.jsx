import { useRef, useState } from 'react';
import './newArticle.scss';
import { createArticle } from '../../services/apiCalls';

export const NewArticle = () => {

  const [imageName, setImageName] = useState('No image selected');
  const title = useRef('');
  const content = useRef('');
  const image = useRef('');

  const uploadImage = (e) => {
    setImageName(e.target.files[0].name);
  }

  const sendForm = (e) => {
    e.preventDefault();
    createArticle(title.current.value, content.current.value, image.current.files[0].name);
  }

  return (
    <div className='new-articles-container'>
      <div className="form-container">
        <form className='new-article-form' onSubmit={sendForm}>
          <input ref={title} className='form-element input' type='text' name='title' placeholder='Blog title' />
          <textarea ref={content} className='form-element text-area input' type='text' name='content' placeholder='Blog content' />
          <input ref={image} className='form-element form-img' type='file' name='image' aria-label='image' onChange={uploadImage} />
          <label className=""><center>{imageName}</center></label>

          <button className='form-element form-confirm-btn'>Confirm</button>
        </form>
      </div>
    </div>
  )
}
