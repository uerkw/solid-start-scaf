import { Component, For, createSignal } from "solid-js";
import {
  UploadFile,
  createDropzone,
  createFileUploader,
  fileUploader,
} from "@solid-primitives/upload";

fileUploader;

export default function Page() {
  return (
    <div class="content-center justify-center align-middle container">
      <div class="text-white bg-slate-600 min-h-48 min-w-96 w-96 h-48">
        <h1 class="text-white text-center"> Single Upload Field: </h1>
        <SingleFileUpload />
      </div>
      <div class="text-white bg-slate-700 min-h-48 min-w-96 w-96 h-48">
        <h1 class="text-white text-center"> Multiple Upload Field: </h1>
        <MultipleFileUpload />
      </div>
      <div class="text-white bg-slate-800 min-h-48 min-w-96 w-96 h-48">
        <h1 class="text-white text-center"> Dropzone Upload Field: </h1>
        < Dropzone />
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
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

const MultipleFileUpload: Component = () => {
  const { files, selectFiles } = createFileUploader({
    multiple: true,
    accept: "image/*",
  });

  return (
    <div class="flex flex-col">
      <div class="flex flex-row items-center content-center gap-x-4">
        <h5 class="text-center">Select multiple files</h5>
        <button
        class= "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            selectFiles((files) => files.forEach((file) => console.log(file)));
          }}
        >
          Select
        </button>
        <For each={files()}>{(item) => <p>{item.name}</p>}</For>
      </div>
    </div>
  );
};

const Dropzone: Component = () => {
  const { setRef: dropzoneRef, files: droppedFiles } = createDropzone({
    onDrop: async (files) => {
      await doStuff(2);
      files.forEach((f) => console.log(f));
    },
    onDragOver: (files) => console.log("over", files.length),
  });

  return (
    <div>
      <h5>
        Upload files using <strong>createDropzone</strong> with `div` and async
        callback
      </h5>
      <div
        ref={dropzoneRef}
        style={{ width: "100px", height: "100px", background: "red" }}
      >
        Dropzone
      </div>
      <For each={droppedFiles()}>{(file) => <p>{file.name}</p>}</For>
    </div>
  );
};

function doStuff(arg0: number) {
  throw new Error("Function not implemented.");
}

const FileUploaderDirective: Component = () => {
  const [files, setFiles] = createSignal<UploadFile[]>([]);

  return (
    <div>
      <h5>
        Upload files using <strong>fileUploader directive</strong>
      </h5>
      <input
        type="file"
        multiple
        use:fileUploader={{
          userCallback: (fs) => fs.forEach((f) => console.log(f)),
          setFiles,
        }}
      />
      <For each={files()}>{(file) => <p>{file.name}</p>}</For>
    </div>
  );
};
