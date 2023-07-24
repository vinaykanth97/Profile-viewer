
import EditPageLayout from "../editpageLayout"


export default function InnerContent({ children }) {
    return (

        <EditPageLayout>
            <section className="basis-[80%]">
                {children}
            </section>
        </EditPageLayout>
    )
}
