// app/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-3xl text-center font-bold">Welcome to My Next.js Project</h1>
        <p className="text-xl">This is my home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
