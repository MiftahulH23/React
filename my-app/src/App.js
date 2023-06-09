import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Tes from './components/berita'
import useSWR from 'swr'
function App() {
  return (
    <div>
      <Header />
      {/* <Content /> */}
      <Tes />
    </div>

  );
}

export default App;
