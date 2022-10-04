import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { createStylesCache, createStylesServer } from '../src';

export default class extends NextDocument<{
  emotionStyleTags: JSX.Element[];
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createStylesCache();
    const { extractCriticalToChunks } = createStylesServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp(App) {
          // TODO: define type instead of any
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const EnhancedApp = (props: any) => {
            return <App {...props} stylesCache={cache} />;
          };

          return EnhancedApp;
        },
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    const emotionStyleTags = extractCriticalToChunks(
      initialProps.html
    ).styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
