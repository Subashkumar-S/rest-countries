import { AppProps } from 'next/app';
import { CountryProvider } from '@/context/CountryContext';
import Home from '@/components/Home';

export default function Page({ pageProps }: AppProps) {
  
  return (
    <CountryProvider>
      <Home {...pageProps} />
    </CountryProvider>
  );
}
