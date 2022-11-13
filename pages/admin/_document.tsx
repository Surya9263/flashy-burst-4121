import { Html, Head, Main, NextScript } from 'next/document'
import { AdminHeader } from '../../components'

export default function Document() {
  return (
    <Html>
      <Head>

      </Head>
      <body>
        <AdminHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}