import ThemeToggle from "../ThemeToggle/ThemeToggle";
import style from './Header.module.css'

function Header() {
  return(
    <div className={style.container} >
      <div>
        <h1 className={style.title} >Where in the world?</h1>
      </div>
      <ThemeToggle />
    </div>
  );


}

export default Header;