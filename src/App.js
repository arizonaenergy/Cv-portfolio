import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";
import Work from "./components/Work";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <Work />
      <span>Hello world</span>
    </div>
  );
}

export default App;
