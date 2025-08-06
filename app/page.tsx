import { ClientBind } from "./ClientComponent";
import { FunctionTest } from "./ClientComponent/_expressions"

/** Changing the FunctionTest body/result, 
 * won't trigger a render on the client component*/
export default function Home() {
  return <div>
    <ClientBind />
    <h2>{FunctionTest()}</h2>
  </div>
}
