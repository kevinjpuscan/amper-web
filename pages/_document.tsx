import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/styles/global.css"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="/styles/clean.css"
            crossOrigin="anonymous"
          />
          <script
            src="https://kit.fontawesome.com/a333051f3b.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
