import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Componentes/Header/Header';
import
{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Componentes/Home/Home';
import Services from './Componentes/Services/Services';
import AboutUs from './Componentes/AboutUs/AboutUs';
import Footer from './Componentes/Footer/Footer';
import Photograph from './Componentes/Photograph/Photograph';
import Login from './Componentes/Login/Login';
import NotFound from './Componentes/NotFound/NotFound';
import Register from './Componentes/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Componentes/PrivateRoute/PrivateRoute';
// import PackageDetails from './Componentes/PackageDetails/ServiceDetails/PackageDetails';
// import ReviewPackage from './Componentes/ReviewPackage/ReviewPackage';
import Booking from './Componentes/BookingPackage.js/Booking';
import OrderReview from './Componentes/OrderReview/OrderReview';
import PackageDetails from './Componentes/PackageDetails/PackageDetails';
import AddNewService from './Componentes/AddNewService/AddNewService';
import Myorders from './Componentes/MyOrders/Myorders';

function App()
{
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/photograph">
              <Photograph></Photograph>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <PrivateRoute path="/reviewPackage">
              <ReviewPackage></ReviewPackage>
            </PrivateRoute> */}
            <PrivateRoute path="/orderreview">
              <OrderReview></OrderReview>
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addnewservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path="/myorders:/userId">
              <Myorders></Myorders>
            </PrivateRoute>
            <PrivateRoute path="/packagedetails/:packagedetailsId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
