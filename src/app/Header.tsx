import Link from "next/link"
import Image from "next/image"
import { ButtonGroup, Button } from "@material-tailwind/react"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    return (
        <header className="flex place-items-center flex-col bg-white pt-5 sticky -top-40 z-20">
            <Link className="block relative" href={"/"}>
                <Image
                    className="self-center"
                    src="/images/pci-logo-nobg.png"
                    alt={"PCI Logo"}
                    width={248}
                    height={140}
                />
            </Link>
            <div className="flex flex-row justify-around w-full">
                <div></div>
                <div className="flex flex-row self-center my-5">
                    <ButtonGroup variant="text" size="lg">
                        <Button onClick={() => router.push('/about')}>
                            About Us
                        </Button>
                        <Button onClick={() => router.push('/projects')}>
                            Projects
                        </Button>
                        <Button onClick={() => router.push('/research')}>
                            Research & Data
                        </Button>
                        <Button onClick={() => router.push('/research')}>
                            Media
                        </Button>
                        <Button onClick={() => router.push('/presentations')}>
                            Presentations
                        </Button>
                        <Button onClick={() => router.push('/newsletter')}>
                            Newsletter
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="my-5">
                    <Link href="https://github.com/PSLmodels">
                        <Image
                            className="transition-all hover:drop-shadow-lg"
                            src="/icons/github-mark.svg"
                            width={50}
                            height={50}
                            alt={"github repo"}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}