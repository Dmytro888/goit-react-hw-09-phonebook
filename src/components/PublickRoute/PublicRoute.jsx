import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogged } from '../../redux/auth/auth-selector';

const PublicRoute = ({
  component: Component,
  isLogged,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLogged && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isLogged: getLogged(state),
});

export default connect(mapStateToProps)(PublicRoute);
