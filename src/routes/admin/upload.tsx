import { Component, For, createSignal } from "solid-js";
import {
  createDropzone,
  createFileUploader,
  fileUploader,
} from "@solid-primitives/upload";

fileUploader;

export default function Page() {
  return (
    <div class="content-center justify-center align-middle container">
      <div class="text-white bg-slate-600 min-h-80 min-w-96 w-96 h-80">
        <h1 class="text-white text-center"> Upload Field: </h1>
        <SingleFileUpload></SingleFileUpload>
      </div>
    </div>
  );
}

const SingleFileUpload: Component = () => {
  const { files, selectFiles } = createFileUploader();
  const { files: filesAsync, selectFiles: selectFilesAsync } =
    createFileUploader();

  function doStuff(arg0: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <div class="flex flex-col">
      <div class="flex flex-row items-center content-center gap-x-4">
        <h5 class="text-center">Select a single file</h5>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            selectFiles(([{ source, name, size, file }]) => {
              console.log({ source, name, size, file });
            });
          }}
        >
          Select
        </button>
        <For each={files()}>{(file) => <p>{file.name}</p>}</For>
      </div>

      <div class="flex flex-row items-center content-center gap-x-4">
        <h5>Select a single file with async callback</h5>
        <button
        class= "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            selectFilesAsync(async ([{ source, name, size, file }]) => {
              await doStuff(2);
              console.log({ source, name, size, file });
            });
          }}
        >
          Select
        </button>
        <For each={filesAsync()}>{(file) => <p>{file.name}</p>}</For>
      </div>
    </div>
  );
};
