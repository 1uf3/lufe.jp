import Link from "next/link";

export type Props = {
    title: string;
    description: string;
};

export default function Hero({ title, description }: Props) {
    return (
        <section>
            <div className="flex p-10 items-center flex-col text-gray-600 text-sm font-mono subpixel-antialiased">
                <h1 className="pb-5 text-3xl font-bold text-stone-900">
                    <Link passHref={true} href="/">
                        <a className="hover:underline hover:cursor-pointer">{title}</a>
                    </Link>
                </h1>
                <p className="text-lg text-stone-800">{description}</p>
            </div>
        </section>
    );
}