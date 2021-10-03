import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Layout from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
