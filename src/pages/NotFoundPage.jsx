import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

function NotFoundPage() {
  return(
    <div className={style.container}>
      <p>Error 404</p>
      <p>The page you are looking for doesn't exist.</p>
      <Link className={style.linkStyle} to={'/'}>Go back</Link>
    </div>
    
  );
}

export default NotFoundPage;