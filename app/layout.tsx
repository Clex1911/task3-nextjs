import Link from "next/link"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li style={{cursor: "pointer"}}><Link href="/settings">Settings</Link></li>
                    <li style={{cursor: "pointer"}}><Link href="/Search">Search People</Link></li>
                </ul>
                {children}
                {/* <div>Footer</div> */}
            </body>
        </html>
    )
}