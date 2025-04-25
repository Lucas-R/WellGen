import Aside from "../Aside";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full h-screen flex">
            <div className="w-full max-w-52 h-full border-r border-stone-900/30">
                <Aside />
            </div>
            <div className="grow">
                {children}
            </div>
        </div>
    )
}