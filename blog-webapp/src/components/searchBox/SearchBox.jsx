import { useState } from 'react';
import './searchBox.scss';
import { useRef } from 'react';

export const SearchBox = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleValue = () => {
        setValue(inputRef.current.value);
    }

  return (
    <div className='searchBox-container'>
        <input
          ref={inputRef}
          onChange={handleValue}
          className='searchBox-input'
          value={value}
          placeholder='Buscar..' 
          aria-label='Buscar' 
        />
    </div>
  )
}
