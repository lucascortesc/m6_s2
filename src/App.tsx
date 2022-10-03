import { Home } from "./Pages/Home";
import { GlobalStyle } from "./Styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
