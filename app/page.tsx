import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Recherche <span className="text-primary">d'emploi</span>
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Vous cherchez un emploi et avez du mal à suivre toutes vos
            candidatures ? Avec{" "}
            <span className="text-blue-700 bold">Jobify</span>, gérez facilement
            vos recherches d'emploi, suivez vos candidatures et atteignez vos
            objectifs professionnels plus rapidement.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Commencez Dès Aujourd'hui</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
