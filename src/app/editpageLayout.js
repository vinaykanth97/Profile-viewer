
import Sidebar from './components/Sidebar'

export default function EditPageLayout({ children }) {
    return (
       
            <main>
                <div className="container mx-auto px-4 flex gap-10 items-start">
                    <Sidebar />
                    {children}
                </div>
            </main>
       
    )
}
