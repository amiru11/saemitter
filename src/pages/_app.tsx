import type { AppProps } from 'next/app';

import globalStyles from 'styles/global.styled';
import normalizeStyles from 'styles/normalize.styled';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx>{normalizeStyles}</style>
      <style jsx>{globalStyles}</style>
    </>
  );
}
