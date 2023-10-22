import './Styles/App.css';
import { HeaderSection } from './Containers/HeaderSection';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div id='app-inner-div'>
      <HeaderSection/>
      <Outlet />
    </div>
  );
}

export default App;
