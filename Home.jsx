import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CakeCard from '../components/CakeCard';

const featuredCakes = [/* Array of cake objects */];

const Home = () => (
  <>
    <Header />
    <main>
      <h2>Welcome to Cake Shop</h2>
      <div className="featured-cakes">
        {featuredCakes.map(cake => <CakeCard key={cake.id} cake={cake} />)}
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
