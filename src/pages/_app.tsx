import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
