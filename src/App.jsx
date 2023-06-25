import { AppProvider } from "./context";
import Home from "./pages/home";
import "./App.css";

const App = () => {
  return (
    <div className="bg-mobile">
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
};
export default App;
