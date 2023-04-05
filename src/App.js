import About from "./components/About";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Content />
      <Work />
    </div>
  );
}

export default App;
