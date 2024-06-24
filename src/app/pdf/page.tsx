import { DividerPDF } from "../components/DividerPDF"
import { HeaderPage } from "../components/HeaderPage"

export  default  () => {

    
    return (
        <>
            <HeaderPage title="PDF" />
            <div className="flex flex-col justify-center items-center pt-10 gap-4">
                <DividerPDF />                
            </div>
        </>

    )
}