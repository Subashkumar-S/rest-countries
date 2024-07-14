import Header from "@/components/Header";
import Panel from "@/components/Panel";
import Detail from "@/components/Detail";

export default function Country(){
    return (
        <main className="bg-veryLightGray text-veryDarkBlue dark:bg-veryDarkBlue dark:text-White w-full min-h-[100vh]">
            <Header />
            <Panel />
            <Detail />
        </main>
    )
}