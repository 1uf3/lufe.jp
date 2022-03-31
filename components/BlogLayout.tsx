import Head from "next/head";
import Hero from "./Hero";

const BLOG_TITLE = "lufeの備忘録";
const BLOG_DESCRIPTION = "なんとなく書きます";

export type Props = React.PropsWithChildren<{
    title?: string;
    description?: string;
}>;

export default function BlogLayout({ title, description, children }: Props) {
    const page = title ? `${title} | ${BLOG_TITLE}` : BLOG_TITLE;
    return (
        <>
            <Head>
                <title>{page}</title>
                <meta name="description" content={description ?? BLOG_DESCRIPTION} />
            </Head>
            <Hero title={BLOG_TITLE} description={BLOG_DESCRIPTION} />
            <main className="p-2 mx-auto max-w-3xl min-h-screen lg:px-0">
                {children}
            </main>
        </>
    );
}