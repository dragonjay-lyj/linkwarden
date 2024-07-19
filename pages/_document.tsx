import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 在Head内添加脚本通常是为了更好的性能和加载控制 */}
        <script
          defer
          src="https://status.dragonjay.top/script.js"
          data-website-id="ad0a8905-fbd1-467e-86e1-7c3c5fdb813c"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
