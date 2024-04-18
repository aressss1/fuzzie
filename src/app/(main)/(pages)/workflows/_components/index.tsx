import Workflow from "./workflow";

const Workflows = () => {
    return ( 
        <div className="relative flex flex-col gap-4" >
            <section className="flex flex-col gap-4 m-2" >
                <Workflow 
                    description="shshshhs"
                    id="12121"
                    name="dsdsds"
                    publish={false}
                />
            </section>
        </div>
     );
}
 
export default Workflows;