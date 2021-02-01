/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.style.scss';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mainWrapper">
      <Head>
        <title>Mercado Libre Argentina</title>
        <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mercado Libre Argentina" />
        <meta property="og:description" content="La comunidad de compra y venta online más grande de América Latina." />
        <meta property="og:site_name" content="Mercado Libre" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <style jsx>
        {`
        .mainWrapper {
          padding-bottom: 30px;
        }
        `}
      </style>
    </div>
  );
}

export default MyApp;
