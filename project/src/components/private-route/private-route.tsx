import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
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

export {PrivateRoute};
export default connector(PrivateRoute);
