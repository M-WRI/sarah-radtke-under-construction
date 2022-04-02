import "../styles/globals.css";

// components
import Navbar from "../components/Navbar";
import InformationModal from "../components/InformationModal";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
