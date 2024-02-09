import { useEffect, useReducer } from 'react';
import './output.css'
import 'animate.css'
import { authManager } from './config/context/auth-manager';
import AuthContext from './config/context/auth-context';
import AppRouter from './router/AppRouter';
/**
 * Es una variable global apartado del navegador para guardar datos => "string"
 * key => value
 */
const init = () => JSON.parse(localStorage.getItem('user'));

function App() {
  const [user, dispatch] = useReducer(
    authManager, {}, init
  );
  useEffect(() => {
    if(!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, []);
  return <AuthContext.Provider value={{dispatch, user}}>
    <AppRouter
    
    />  
  </AuthContext.Provider>;

}

export default App
