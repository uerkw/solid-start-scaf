// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import GetFile from "./routes/r2/get-file";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - with Vitest</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Route path="/r2/get-file" component={GetFile}></Route>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
