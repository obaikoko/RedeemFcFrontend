import '@/styles/globals.css';
import Layout from '../comp/Layout'; 
import {SessionProvider} from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </SessionProvider>
    </>
  );
}
