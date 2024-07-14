import Logo from "@/components/Logo";
import Toggle from "@/components/Toggle";

export default function Header(){
    return(
        <div className="flex items-center justify-between h-16 bg-white text-veryDarkBlue dark:bg-darkBlue dark:text-white padding shadow-lg shadow-gray-400 dark:shadow-gray-800">
            <Logo />
            <Toggle />
        </div>
    )
}