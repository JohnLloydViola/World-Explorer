import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

function NotFoundPage() {
  return(
    <div className={style.container}>
      <p>Error 404</p>
      <p>Page you are looking for doesn't exist.</p>
      <Link to={'/'}>Go back</Link>
    </div>
    
  );
}

export default NotFoundPage;