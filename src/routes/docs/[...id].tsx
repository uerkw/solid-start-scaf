import { clientOnly } from "@solidjs/start";
import Testing from "../../docs/Testing.mdx";

const ClientOnlyRenderer = clientOnly(
  () => import("~/components/MarkdownRenderer")
);

export default function DocPage() {
  ///return <ClientOnlyRenderer/>

  return (
    <div class="container  text-white bg-red-500">
    <Testing>
      
    </Testing>
      {/* <ClientOnlyRenderer/> */}
    </div>
  );
}
