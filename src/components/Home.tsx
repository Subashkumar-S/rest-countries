import Header from "@/components/Header";
import Panel from "@/components/Panel";
import Container from "@/components/Container";
export default function Home() {
  
  return (
    <main className="w-full min-h-[100vh] bg-veryLightGray text-veryDarkBlue dark:bg-veryDarkBlue dark:text-white font-nunito ">
      <Header />
      <Panel />
      <Container />
    </main>
  );
}
