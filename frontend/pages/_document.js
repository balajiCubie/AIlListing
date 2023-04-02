import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        
<Script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" strategy="beforeInteractive" />
<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" strategy="beforeInteractive" />
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" strategy="beforeInteractive" />

      </body>
    </Html>
  )
}
