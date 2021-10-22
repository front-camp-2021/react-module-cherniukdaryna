import Header from "./conponents/Header";
import CardsList from "./conponents/CardsList";
import Input from "./conponents/Input";
import Pagination from "./conponents/Pagination";
import SideBar from "./conponents/Side-Bar";
import './style.css';
//import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="all-content">
        <SideBar />
        <section className="content">
          <Input />
          <CardsList />
        </section>
        <Pagination />
      </div>
    </>
  );
}

export default App;
