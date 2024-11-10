import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CakeCard from '../components/CakeCard';

const cakeCategories = [/* Array of cakes */];

const Categories = () => (
  <>
    <Header />
    <main>
      <h2>Cake Categories</h2>
      <div className="category-list">
        {cakeCategories.map(cake => <CakeCard key={cake.id} cake={cake} />)}
      </div>
    </main>
    <Footer />
  </>
);

export default Categories;
