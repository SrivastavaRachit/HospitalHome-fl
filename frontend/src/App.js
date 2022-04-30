import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import Admin from './components/admin';
import UserDashboard from './components/user';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MainComponent from './components/main';
import { EquipmentProvider } from './providers/equipmentContext';
import Home from './components/home';
import { OrderProvider } from './providers/orderContext';
import { NursingProvider } from './providers/nursingContext';
import { ContactProvider } from './providers/contactContext';
import { StaffProvider } from './providers/staffContext';

function App() {

  const stripe = loadStripe(
    "pk_test_51KtvTTSH5orWLNFB4WzOZb0MErvaHYmfowZJNoATpEoBdwe4XeWJC3j9RhuCbwLmbrZSGM1USh5kMoeWMrMGkl5Y00yBvLrBGS"
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[700],
        color: 'white'
      },
    },
    transitions: {
      duration: {
        shortest: 100,
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Elements stripe={stripe}>
        <Router>
          <UserProvider>

            <EquipmentProvider>
              <NursingProvider>
              <ContactProvider>
              <StaffProvider>

              <Route exact path="/">
                  <Redirect to="/home" />
                </Route>

                <OrderProvider>
                  <Route path="/user">
                    <UserDashboard />
                  </Route>

                  <Route path="/admin">
                    <Admin />
                  </Route>

                  <Route path="/app">
                    <MainComponent />
                  </Route>

                </OrderProvider>

                <Route path="/home">
                  <Home />
                </Route>

              </StaffProvider>
              </ContactProvider>
              </NursingProvider>
            </EquipmentProvider>

          </UserProvider>
        </Router>

      </Elements>
    </ThemeProvider>
  );
}

export default App;