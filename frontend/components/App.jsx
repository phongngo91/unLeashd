import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import UsersShowContainer from '../components/users/users_show_container';
import HomeContainer from "./home/home_container";
import SplashContainer from "./splash/spash_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PetShopsIndexContainer from './pet_shops/pet_shops_index_container';
import PetShopShowContainer from './pet_shops/pet_shop_show_container';
import TestImageContainer from './test_image/test_image_container';
import CreateDogContainer from './dogs/create_dog_container';
import DogsIndexContainer from './dogs/dogs_index_container';

const App = () => {
  return (
    <>
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/users/:userId" component={UsersShowContainer} />
        <Route exact path="/petshops" component={PetShopsIndexContainer} />
        <Route path="/petshops/:petShopId" component={PetShopShowContainer} />
        <ProtectedRoute path="/home" component={HomeContainer} />
        <Route path="/testimage" component={TestImageContainer} />
        <Route exact path="/dogs/new" component={CreateDogContainer} />
        <Route exact path="/dogs" component={DogsIndexContainer} />
      </Switch>
    </>
  );
};

export default App;
