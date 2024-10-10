// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/tailwind.css';  // Ini untuk global CSS (jika ada)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
