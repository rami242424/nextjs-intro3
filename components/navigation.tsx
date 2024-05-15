// hook : 경로명을 알려줌
// path name : user가 현재 머물고 있는 url
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    // console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"> Home </Link> {path === "/" ? "🤖" : ""}
                </li>
                <li>
                    <Link href="/about-us"> About US </Link> {path === "/about-us" ? "🤖" : ""}   
                </li>
            </ul>
        </nav>
    );
}