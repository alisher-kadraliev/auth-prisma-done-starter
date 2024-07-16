import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar"
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

interface ProtectedLayout {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayout) => {
    return <SessionProvider><AdminPanelLayout>{children}</AdminPanelLayout></SessionProvider>;
}
export default ProtectedLayout