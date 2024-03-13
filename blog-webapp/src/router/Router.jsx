import { Routes, Route } from 'react-router-dom';
import { Articles } from '../components/articles/Articles';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' />
        <Route path='/articles' element={ <Articles /> } />
    </Routes>
  )
}
