import './index.scss';
import { Routing } from '@/pages';
import { withAuth } from '@app/providers/withAuth';

const App = () => {
  return <Routing />;
};

const AppWithAuth = withAuth(App);

export default AppWithAuth;
