// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import GetFile from "./routes/r2/get-file";
import "./index.css";
import Page from "./routes/admin/upload";


export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - with Vitest</Title>
          <div>

          <a class = "mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/">Index</a>
          <a class = "mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/about">About</a>
          <a class = "mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/admin/upload">Upload</a>
          </div>
          {/* <Route path="/admin/upload" component={Page}></Route> */}
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
