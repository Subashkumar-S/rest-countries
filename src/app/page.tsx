import { CountryProvider } from '@/context/CountryContext';
import Home from '@/components/Home';

export default function Page() {
  
  return (
    <CountryProvider>
      <Home />
    </CountryProvider>
  );
}
