import PropTypes from "prop-types";
import { AppContext } from "./app-context";

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        isMobile: false,
        isTablet: false,
        isDesktop: false,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
