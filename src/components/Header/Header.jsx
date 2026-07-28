import ThemeToggle from './ThemeToggle/ThemeToggle'
import style from './Header.module.css'
import {useState, useEffect} from 'react'

function Header() {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('mode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('mode', isDarkMode);

    if (isDarkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [isDarkMode]);



  return(
    <div className={style.container} >
      <div>
        <h1 className={style.title} >Where in the world?</h1>
      </div>
      <ThemeToggle setIsDarkMode={setIsDarkMode} />
    </div>
  );


}

export default Header;