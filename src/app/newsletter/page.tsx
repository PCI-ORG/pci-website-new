"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const getSubstackEmbedLink = (link: string) => {
    const postLinkRegex = new RegExp(/(?<url>.*)\/p\/(?<slug>.*)/g);
    const r = postLinkRegex.exec(link);
    console.log(r !== null ? (r.groups !== undefined ? r.groups.url : "") : "");
    if (!r || !r.groups || !r.groups.url || !r.groups.slug) {
        return;
    }
    const url = r.groups.url;
    const slug = r.groups.slug;
    const frameURL = `${url}/embed/p/${slug}`;
    console.log(frameURL);
    const destURL = new URL(frameURL);

    destURL.searchParams.append("origin", window.location.origin);
    destURL.searchParams.append("fullURL", window.location.href);
    const ret = `${destURL.toString()}`;
    console.log(ret);
    return ret;
};

export default function Newsletter() {
    const [showNewsletter, setShowNewsletter] = useState(false);
    useEffect(() => {
        setShowNewsletter(true);
    }, []);
    return (
        <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
            <Typography
                className={"max-w-7xl hidden md:inline-block"}
                variant="h1"
            >
                {"Newsletter".toUpperCase()}
            </Typography>
            <Typography className={"max-w-7xl md:hidden"} variant="h3">
                {"Newsletter".toUpperCase()}
            </Typography>

            <div className={"max-w-xs md:max-w-3xl xl:max-w-7xl"}>
                <Typography
                    className="hidden md:block max-w-7xl my-8"
                    variant="lead"
                >
                    {
                        "The Policy Change Index newsletter delivers routine updates on the series of PCI projects to your inbox through Substack.\n"
                    }
                    <br />
                    If you are not in the loop yet,{" "}
                    <Link
                        href="https://policychangeindex.substack.com/"
                        className={"text-blue-600"}
                    >
                        sign up here
                    </Link>
                    .
                    <br />
                    Below is the latest issue of the newsletter. Check out our
                    <Link
                        href="https://policychangeindex.substack.com/archive"
                        className={"text-blue-600"}
                    >
                        {" "}
                        Substack page{" "}
                    </Link>
                    for the archive.
                </Typography>
                <Typography
                    className="md:hidden max-w-7xl my-8"
                    variant="paragraph"
                >
                    {
                        "The Policy Change Index newsletter delivers routine updates on the series of PCI projects to your inbox through Substack.\n"
                    }
                    <br />
                    If you are not in the loop yet,{" "}
                    <Link
                        className={"text-blue-600"}
                        href="https://policychangeindex.substack.com/"
                    >
                        sign up here
                    </Link>
                    .
                    <br />
                    Below is the latest issue of the newsletter. Check out our
                    <Link
                        href="https://policychangeindex.substack.com/archive"
                        className={"text-blue-600"}
                    >
                        {" "}
                        Substack page{" "}
                    </Link>
                    for the archive.
                </Typography>

                {showNewsletter && (
                    <div className="w-full flex place-content-center">
                        <iframe
                            className="block w-[60rem] h-[40rem] lg:size-[40rem]"
                            sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups"
                            allow="clipboard-read clipboard-write allow-top-navigation allow-scripts allow-same-origin allow-popups"
                            src={getSubstackEmbedLink(
                                "https://policychangeindex.substack.com/p/meet-the-pci-for-north-korea"
                            )}
                        ></iframe>
                    </div>
                )}
            </div>
        </section>
    );
}
