import { AppProvider } from "./app-provider";
import AppRoute from "./router";
import "./App.css";

const App = () => {
  return (
    <div className="bg-mobile">
      <AppProvider>
        <AppRoute />
      </AppProvider>
    </div>
  );
};
export default App;
