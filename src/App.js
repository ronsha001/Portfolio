import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    
    const activeMenu = () => {
      const li = document.querySelectorAll('.nav-li')
      const sec = document.querySelectorAll('section')

      
      const len = sec.length
      if (window.scrollY >= sec[1].offsetTop + window.innerHeight - 250) {
        li[2].classList.add("active")
        li[1].classList.remove("active");
        li[0].classList.remove("active");
        return
      }
      for (let i = 0; i < len; i++) {
        if (window.scrollY + 60 >= sec[i].offsetTop && window.scrollY + 60 <= sec[i].offsetTop + sec[i].offsetHeight) {
          li[i].classList.add("active");
        } else {
          li[i].classList.remove("active");
        }
      }
    }
    activeMenu()
    return window.addEventListener("scroll", activeMenu)
  }, []);
  
  return (
    <>
    <Home />
    </>
  );
}

export default App;
