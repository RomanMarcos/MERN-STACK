import { useState } from 'react';
import './searchBox.scss';
import { useRef } from 'react';
import { getArticle } from '../../services/apiCalls';

export const SearchBox = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleValue = () => {
        setValue(inputRef.current.value);
    }

    const searchArticle = (event) => {
      if (event.key === 'Enter') {
        getArticle(value).then((data) => {
          console.log(data.data.results);
        }) ;
      }
    }

  return (
    <div className='searchBox-container' onChange={handleValue} onKeyDown={(e) => searchArticle(e)} > {/* <-- Event delegation */}
      <input
        ref={inputRef}
        className='searchBox-input'
        value={value}
        placeholder='Buscar..' 
        aria-label='Buscar' 
      />
    </div>
  )
}
