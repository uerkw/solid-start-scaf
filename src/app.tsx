// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import GetFile from "./routes/r2/get-file";
import "./index.css";


export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - with Vitest</Title>
          <div>

          <a class = "mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/">Index</a>
          <a class = "font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/about">About</a>
          </div>
          <Route path="/r2/get-file" component={GetFile}></Route>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
