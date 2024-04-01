import "./App.css";
import { Footer, Header, Sidebar } from "./components";
import Pages from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pagesWrapper">
        <Sidebar />
        <Pages />
      </div>
      <Footer />
    </div>
  );
}

export default App;
