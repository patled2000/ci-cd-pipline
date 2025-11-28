 import logo from './logo.svg';
import './App.css';
import Header from './componet/header';
import ResponsiveSlider from './componet/heroslider';
import AboutPage from './componet/about';
import WhyChoose from './componet/WhyChoose';
import ProductSection from './componet/ProductSection';
import GallerySection from './componet/GallerySection';
import DealershipSection from './componet/DealershipSection';
import MapSection from './componet/MapSection';
import TextSlider from './componet/TextSlider';
import Testimonials from './componet/Testimonials';
import Process from './componet/Process';
import FAQSection from './componet/FAQSection';
import Slider from './componet/Slider';
import Footer from './componet/Footer';
import GallerySlider from './componet/GallerySection';
import Categories from './componet/Categories';
import Features from './componet/Features';
import VideoSection from './componet/VideoSection';
import Hero from './componet/hero';

function App() {
  return (
    <div>
      <Header />

      
    <section id="home">
 
   <Hero/>
</section>
<section>
  <Categories/>
</section>
<section>
  <Features/>
</section>

<section id="about">
  <AboutPage />
</section>

<section id="products">
  <ProductSection />
</section>

<section id="whychoose">
  <WhyChoose />
</section>
<section id="gallery">
  <GallerySlider />
</section>


<section id="faq">
  <FAQSection />
</section>
{/** <section id="testimonials">
  <Testimonials />
</section>  */}

 

 


 
<section>
  <VideoSection/>
</section>
<section id="dealership">
  <DealershipSection />
</section>
<section id="map">
  <MapSection />
</section>

 

<section id="contact">
  <Footer />
</section>



     
    </div>
  );
}

export default App;
