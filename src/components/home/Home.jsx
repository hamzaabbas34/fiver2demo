import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ReasonsToJoin from './ReasonsToJoin';
import Footer from './Footer';
import FAQ from './FAQ';
import Subscribe from './Subscribe';
import MovisGrid2 from './MovisGrid2';
// const trendingMovies = [
//   { title: 'Lucky Bhaskar', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Jigra', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Amaran', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'The Great Indian...', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Devara', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
// ];

// const netflixMovies = [
//   { title: 'Money Heist', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Mismatched', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Yeh Kaali Kaali...', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Stranger Things', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
//   { title: 'Queen of Tears', image: 'https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg' },
// ];

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <Subscribe/>
      <MovisGrid2 title="Trending Now"/>
      <MovisGrid2 title="Only on Netflex" />
      
      <ReasonsToJoin />

      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
