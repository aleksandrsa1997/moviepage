import { wrapper } from 'src/store';

// @ts-ignore
const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux(App);