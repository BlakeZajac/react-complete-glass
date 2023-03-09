import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/wp-json",
    createProxyMiddleware({
      target: "https://www.completeglass.com.au",
      changeOrigin: true,
    })
  );

  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.createsend.com",
      changeOrigin: true,
    })
  );
}
