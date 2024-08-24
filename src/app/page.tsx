import Image from "next/image";
import Header from "./components/Header";
import Hero from "../pages/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <Hero />
      </div>
    </>
  );
}
