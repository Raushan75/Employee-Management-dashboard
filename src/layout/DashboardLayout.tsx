import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({children}:{children:React.ReactNode}) {
    return(
        <div className="flex  h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />

                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}