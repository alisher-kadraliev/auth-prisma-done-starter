import { Navbar } from "./_components/navbar"

interface ProtectedLayout {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayout) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default ProtectedLayout