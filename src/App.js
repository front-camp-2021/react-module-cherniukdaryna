import Header from "./conponents/Header";
import CardsList from "./conponents/CardsList";
import Input from "./conponents/Input";
import Pagination from "./conponents/Pagination";
import SideBar from "./conponents/Side-Bar";
import MiniSideBar from "./conponents/miniSide-Bar";
import './style.css';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from "react-router-dom";
import arrowBack from '../src/conponents/img/4829860_arrow_back_left_icon.svg'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MiniSideBar />
      
      <div className="all-content">
        <Switch>
          <Route exact path="/">
            <SideBar />
            <section className="content">
              <Input />
              <div className="catalog">
                <CardsList cardsType="all" />
              </div>
            </section>

            <Pagination />
          </Route>

          <Route exact path="/favorites">

            <section
              style={{
                margin: '0 auto'
              }}
              className="content"
            >

              <NavLink
                to="/"
                style={{
                  width: '10vw',
                  height: '3vh',
                  textAlign: 'center',
                  color: "white",
                  backgroundColor: '#6f64f8',
                  fontFamily: "Barlow",
                  fontSize: '2vh',
                  borderRadius: '8px',
                  marginTop: "40px"
                }}
              >
                Back
              </NavLink>

              <div className="catalog">
                <CardsList cardsType="favorites" />
              </div>
            </section>
          </Route>

          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
