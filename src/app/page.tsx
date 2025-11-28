import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Vehicles from "@/components/Vehicles";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Banner />

      <Vehicles />

      <RegistrationForm />

      <Footer />
    </main>
  );
}
