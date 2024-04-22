import { ConnectionsProvider } from "@/providers/connection-provider";
import EditorProvider from "@/providers/editor-provider";
import EditorCanvas from "./_components/editor-canvas";

type Props = {}

const EditorId = (props: Props) => {
    return ( 
        <div className="h-full" >
            <EditorProvider>
                <ConnectionsProvider>
                    <EditorCanvas />
                </ConnectionsProvider>
            </EditorProvider>
        </div>
     );
}
 
export default EditorId;