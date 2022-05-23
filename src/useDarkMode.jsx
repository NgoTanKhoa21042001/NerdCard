import {useState, useEffect} from "react";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(() => localStorage.theme === 'dark');
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }
  useEffect(() => {
    // lấy toàn bộ document trong html
    const html = window.document.documentElement;
    const prev = isDarkMode ? 'light' : 'dark';
    // nếu là light thì remove light và ngc lại
    html.classList.remove(prev); 
    const next = isDarkMode ? 'dark' : 'light';
    html.classList.add(next);
    // save vào localStorage
    localStorage.setItem("theme", next);
  }, [isDarkMode])
  return [isDarkMode, toggleDarkMode];
}
 
export default useDarkMode;