import "./App.css";
import { Footer, Header } from "./components";
import Pages from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pagesWrapper">
        <Pages />
      </div>
      <Footer />
    </div>
  );
}

export default App;
