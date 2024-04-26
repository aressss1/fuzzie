import { Option } from "@/lib/types";
import { ConnectionProviderProps } from "@/providers/connection-provider";

type Props = {
    currentService: string
    nodeConnection: ConnectionProviderProps
    channels?: Option[]
    setChannels?: (value : Option[]) => void  
}

const ActionButton = ({
    currentService,
    nodeConnection,
    channels,
    setChannels
}: Props) => {
    return ( 
        <div>
            Action Button
        </div>
     );
}
 
export default ActionButton;