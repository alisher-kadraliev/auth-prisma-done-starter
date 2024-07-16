import { Navbar } from "./_components/navbar"
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

interface ProtectedLayout {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayout) => {
    return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
export default ProtectedLayout