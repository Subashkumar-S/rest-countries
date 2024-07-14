"use client";
import { usePathname } from "next/navigation";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Back from "@/components/Back";
export default function Panel(){
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className="w-full min-h-32 flex items-start sm:items-center flex-col justify-between sm:flex-row padding">
            {
                pathname == "/" ? (
                    <>
                        <Search />
                        <Filter />
                    </>
                ) :
                    (
                        <Back />
                    )
            }
        </div>
    )
}