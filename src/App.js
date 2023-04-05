import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <Work />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
