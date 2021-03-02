import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';


const ScrollTop: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollTop);