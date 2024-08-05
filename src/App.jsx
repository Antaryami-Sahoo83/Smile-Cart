import Cart from "components/Cart/Cart";
import { PageNotFound } from "components/commons";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import routes from "routes";

import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";

const App = () => (
  <Switch>
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route exact component={Cart} path={routes.cart} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
