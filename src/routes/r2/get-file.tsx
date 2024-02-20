import { Accessor, Suspense } from "solid-js";
import { createSignal, createResource } from "solid-js";
import { render } from "solid-js/web";


const fetchFile = async (id: Accessor<unknown>) => 
(
    (await fetch(`/api/r2/${id}/`)).json()
)

export default function PutFile() {

    const [fileId, setFileId] = createSignal();
    const [file] = createResource(fileId, fetchFile);

    return (
        <div>
            <input
                type="number"
                min="1"
                placeholder = "Enter Numeric ID"
                onInput={(e) => setFileId(e.currentTarget.value)}
            />
            <span>{file.loading && "Loading..." }</span>

        </div>
    )
}