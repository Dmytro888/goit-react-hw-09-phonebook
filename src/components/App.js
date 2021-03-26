import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Loader from 'react-loader-spinner';
import routes from '../routes';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PublicRoute from './PublickRoute';
import PrivateRoute from './PrivateRoute';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage' /* webpackChunkName: "contacts-page" */),
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "reg-page" */),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "log-page" */),
);

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <Loader
            className={styles.Loader}
            type='Oval'
            color='#777'
            height={280}
            width={280}
          />
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PrivateRoute
            exact
            path={routes.contacts}
            component={PhonebookPage}
            redirectTo={routes.login}
          />
          <PublicRoute
            exact
            restricted
            path={routes.register}
            component={RegisterPage}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            exact
            restricted
            path={routes.login}
            component={LoginPage}
            redirectTo={routes.contacts}
          />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
