export const setLanguage = (language) => {
    localStorage.setItem('i18nextLng', language);
  };
  
  export const getLanguage = () => {
    return localStorage.getItem('i18nextLng') || 'en'; // Default to English if no language is set
  };