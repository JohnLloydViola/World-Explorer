import DarkModeImage from '../../assets/images/dark-mode-icon.png' 
import style from './ThemeToggle.module.css'

function ThemeToggle() {
  return(
    <div>
      <button>
        <img src={DarkModeImage} alt='Dark Mode Icon'/>
        <p>Dark Mode</p>
      </button>
    </div>
  );

}

export default ThemeToggle;