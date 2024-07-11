import { createContext,useContext,useState,useEffect } from 'react'; 
import { getCurrentUser } from '../lib/appwrite';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggeddIn] = useState(false);
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res)=>{
            if(res){
                setIsLoggeddIn(true);
                setUser(res);

            }else{
                setIsLoggeddIn(false);
                setUser(null);
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    },[]);
    return(
        <GlobalContext.Provider value={{
            isLoggedIn,
            setIsLoggeddIn,
            user,
            setUser,
            isLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;