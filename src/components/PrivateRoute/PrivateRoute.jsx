import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogged } from '../../redux/auth/auth-selector';

const PrivateRoute = ({
  component: Component,
  isLogged,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLogged ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isLogged: getLogged(state),
});

export default connect(mapStateToProps)(PrivateRoute);
