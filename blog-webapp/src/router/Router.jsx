import { Routes, Route } from 'react-router-dom';
import { Articles } from '../components/articles/Articles';
import { NewArticle } from '../components/newArticle/NewArticle';
import { EmptyPage } from '../views/emptyPage/EmptyPage';
import { SearchBoxResult } from '../components/searchBoxResult/SearchBoxResult';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <EmptyPage /> } />
        <Route path='/articles' element={ <Articles /> } />
        <Route path='/new-article' element={ <NewArticle /> } />
        <Route path='/results' element={ <SearchBoxResult /> } />
    </Routes>
  )
}
