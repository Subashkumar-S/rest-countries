import Link  from "next/link";
import { back } from "@/assets";
import Image from "next/image";

export default function Back(){
    return(
        <Link href="/" className="flex items-center justify-center gap-2 bg-white text-veryDarkBlue dark:bg-darkBlue dark:text-white px-8 py-2 rounded  max-sm:my-6 shadow-lg shadow-gray-400 dark:shadow-gray-900">
            <Image src={back} alt="back arrow" className="buttonSize" />
            Back
        </Link>
    )
}