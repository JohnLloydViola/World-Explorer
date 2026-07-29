import DarkModeImage from '../../../assets/images/dark-mode-icon.png'
import style from './ThemeToggle.module.css'

function ThemeToggle({setIsDarkMode}) {

  function toggleMode() {
    setIsDarkMode(prev => !prev);
  }

  return(
    <div>
      <button onClick={toggleMode}>
        <img className={style.darkModeImage} src={DarkModeImage} alt='Dark Mode Icon'/>
        <p>Dark Mode</p>
      </button>
    </div>
  );

}

export default ThemeToggle;