import { Routes, Route } from 'react-router-dom';
import { Articles } from '../components/articles/Articles';
import { EmptyPage } from '../views/emptyPage/EmptyPage';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <EmptyPage /> } />
        <Route path='/articles' element={ <Articles /> } />
    </Routes>
  )
}
