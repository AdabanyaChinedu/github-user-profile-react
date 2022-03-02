import logo from '../logo.svg';
import Home from '../components/Home'
import Header from '../components/Layout/_header'
import Footer from '../components/Layout/_footer'


function App() {
  
  return (
    <div className="d-flex flex-column flex-fill">
      <div> <Header />  </div>
      <div><Home /></div>
      <div className='mt-auto'><Footer /></div>



    </div>
  );
}

export default App;
