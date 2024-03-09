import { SearchBox } from '../searchBox/SearchBox';
import './navBar.scss';

export const NavBar = () => {
  return (
    <>
      <div className='navBar-component'>
        <div className='navBar-seccion'>
          <ul className='navBar-ul'>
            <li className='navBar-li border-right'> <a href='#' className='navBar-link'> Articles </a> </li>
            <li className='navBar-li'> <a href='#' className='navBar-link'> New article </a> </li>
          </ul>
        </div>
        <div className='navBar-seccion'>
          <a href='#' className='navBar-link'><img className='navBar-img' src='/twiter.png' alt='twiter' /></a>
          <a href='#' className='navBar-link'><img className='navBar-img' src='/linkedin.png' alt='linkedin' /></a>
          <a href='#' className='navBar-link'><img className='navBar-img' src='/facebook.png' alt='facebook' /></a>
        </div>
        <SearchBox />
      </div>
    </>
  )
}
