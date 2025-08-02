import Header from './components/Header';
import Hero from './components/Hero';
import Parks from './components/Parks';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter bg-safari-sand text-safari-brown min-h-screen">
      <Header />
      <Hero />
      <Parks />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;