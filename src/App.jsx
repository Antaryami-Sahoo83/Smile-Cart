import React from "react";

import PageNotFound from "components/PageNotFound";
import { NavLink, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import Product from "./components/Product";
import ProductList from "./components/ProductList";

const App = () => (
  <>
    <div className="mx-4 flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route exact component={ProductList} path="/products" />
      <Route exact component={Product} path="/product" />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
