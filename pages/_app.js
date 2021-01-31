import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.style.scss';
import '../styles/globals.css';
import Navbar  from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return (
    <div className='mainWrapper'>
      <Navbar />
      <Component {...pageProps} />
    </div>
    );
}

export default MyApp
