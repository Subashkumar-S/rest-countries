import Logo from "@/components/Logo";
import Toggle from "@/components/Toggle";

export default function Header(){
    return(
        <div className="flex items-center justify-between h-16 bg-darkBlue padding">
            <Logo />
            <Toggle />
        </div>
    )
}