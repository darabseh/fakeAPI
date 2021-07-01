import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/blog.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
