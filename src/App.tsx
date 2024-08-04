import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className=' h-full min-h-screen justify-between flex flex-col'>
      <Header />
      <main className=' flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
