import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import StaticRouterApp from "./src/components/StaticRouterApp.jsx";

const server = express();

server.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <StaticRouterApp />
    </StaticRouter>
  );

  res.send(`<html>
            <body>
            <div id="root" >${html}</div>
            </body>
        </html>`);
});

server.listen(5000);
