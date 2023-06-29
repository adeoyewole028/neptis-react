import { useContext, createContext } from "react";
import PropTypes from "prop-types";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [userToken, setUserToken] = useState(null);
  // const [user, setUser] = useState(null);
  // const [userRole, setUserRole] = useState(null);
  // const [userProfile, setUserProfile] = useState(null);

  return <AppContext.Provider value={{
    
  }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
