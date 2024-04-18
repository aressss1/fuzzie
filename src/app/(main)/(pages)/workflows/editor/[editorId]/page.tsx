
type Props = {
    params : {
        editorId: string
    }
}

const EditorId = (props: Props) => {
    return ( 
        <div>
            {props.params.editorId}
        </div>
     );
}
 
export default EditorId;