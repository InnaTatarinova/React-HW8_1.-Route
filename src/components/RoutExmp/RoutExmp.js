import React from "react";
import { renderRoutes } from "react-router-config"
import { BrowserRouter, Switch } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Root from "./Root";
import Portfolio from './Portfolio';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';
import Services from "./Services";
//import MyRoutes from "./RoutesFile";

const constRoot = ({ route }) => (
    <div>
      <Root rroutes={route}/>
     </div>
);
const constHome = ({ route }) => (
    <div>
    <h2>Home</h2>
    <Home/>
  </div>
);

const constAbout = ({ route }) => (
    <div>
    <h2>About</h2>
    <About/>
  </div>
);

const constServices = ({ route }) => (
    <div>
    <h2>Services</h2>
    <Services/>
  </div>
);

const constPortfolio = ({ route }) => (
    <div>
    <h2>Portfolio</h2>
    <Portfolio />
  </div>
);

const constTeam = ({ route }) => (
    <div>
    <h2>Team</h2>
    <Team />
  </div>
);

const constBlog = ({ route }) => (
    <div>
    <h2>Blog</h2>
    <Blog />
  </div>
);

const constContact = ({ route }) => (
    <div>
    <h2>Contact</h2>
    <Contact />
  </div>
);


const routes = [
    {
        component: constRoot,
        routes: [
            {
                path: "/",
                exact: true,
                component: constHome
            },
            {
                path: "/about",
                component: constAbout
            },
            {
                path: "/services",
                component: constServices
            },
            {
                path: "/portfolio",
                component: constPortfolio
            },
            {
                path: "/team",
                component: constTeam
            },
            {
                path: "/blog",
                component: constBlog
            },
            {
                path: "/contact",
                component: constContact
            }
        ]
    }
 
];

class RoutExmp extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RoutExmp;