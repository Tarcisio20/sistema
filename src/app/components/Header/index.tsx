import Link from "next/link";

export const Header = () => {
    return(
        <div className="flex justify-between px-5">
            <div>Logo</div>
            <div className="flex gap-4">
                <Link href="/pdf">PDF</Link>
                <a>Pagina 2</a>
            </div>
        </div>
    )
}