import Header from "@/components/Header";
import Panel from "@/components/Panel";
import Container from "@/components/Container";
export default function Home() {
  
  return (
    <main className="w-full min-h-[100vh] bg-veryDarkBlue text-white font-nunito ">
      <Header />
      <Panel />
      <Container />
    </main>
  );
}
