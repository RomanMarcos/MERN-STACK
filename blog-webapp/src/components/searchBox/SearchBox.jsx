import { useState } from 'react';
import './searchBox.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBox = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleValue = () => {
        setValue(inputRef.current.value);
    }

    const searchArticle = (event) => {
      if (event.key === 'Enter') {
        navigate(`/results?search=${value}`);
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
