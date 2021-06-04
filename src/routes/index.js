import { Switch, Route } from 'react-router-dom';

import MainContent from '../components/MainContent';
import Users from '../pages/Users';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainContent />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  );
};

export default Routes;
