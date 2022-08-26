import { Application, ApplicationProps } from '../src';

export const App = (props: ApplicationProps) => {
  return <Application {...props} brand={process.env.BRAND} />;
};

export default App;
