// pages/_app.js
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';  // Import global styles if needed
import PopularSearches from '@/components/PopularSearches';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <PopularSearches />
      <Footer />

    </div>
  );
}

export default MyApp;
