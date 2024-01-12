import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    //connection to store
    <Provider store={appStore}>
        <Body />
    </Provider>
   

  );
}

export default App;
