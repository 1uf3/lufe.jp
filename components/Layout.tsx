import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Navbar";

export type Props = React.PropsWithChildren<{
    title?: string;
    description?: string;
}>;

export default function Layout({ children, title, description}: Props) {
    return (
        <div
            className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono subpixel-antialiased">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/icon.jpg" sizes="64x64" type="image/jpg"/>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-2 h-14">
                        <div className="flex">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-2 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/profile">
                                <a className="text-gray-300 hover:bg-gray-700 px-2 py-2 rounded">
                                    Profile
                                </a>
                            </Link>
                            <Link href="/interest">
                                <a className="text-gray-300 hover:bg-gray-700 px-2 py-2 rounded">
                                    Interest
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a className="text-gray-300 hover:bg-gray-700 px-2 py-2 rounded">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>

            <footer className="w-full flex justify-center items-center h-12 border-t">
                <p className="flex item-center">
                    CopyRight © 2021, lufe All Right Reserved.
                </p>
            </footer>
        </div>
    )
}
