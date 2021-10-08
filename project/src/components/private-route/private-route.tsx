import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render()
          : <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
}

export default PrivateRoute;
