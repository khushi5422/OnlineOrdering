import { useState } from 'react';
import ResponsiveCard from '@/components/navcard';
import ItemCard from '@/components/itemcard';
import { navproducts } from '@/data/navproducts';
import { GarlicBread, Tea, Shake, Coffee, Maggie, Slice, FrenchFries, Pizza, Burger, HotDog, Sandwiches , Cocktails } from '@/data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('GarlicBread');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  let filteredItems: typeof GarlicBread | [] = [];
  if (selectedCategory === 'GarlicBread') {
    filteredItems = GarlicBread;
  } else if (selectedCategory === 'Tea') {
    filteredItems = Tea;
  } else if (selectedCategory === 'Shake') {
    filteredItems = Shake;

  } else if (selectedCategory === 'Coffee') {
    filteredItems = Coffee;

  } else if (selectedCategory === 'Maggie') {
    filteredItems = Maggie;

  } else if (selectedCategory === 'Slice') {
    filteredItems = Slice;

  } else if (selectedCategory === 'FrenchFries') {
    filteredItems = FrenchFries;

  } else if (selectedCategory === 'Pizza') {
    filteredItems = Pizza;

  } else if (selectedCategory === 'Burger') {
    filteredItems = Burger;

  } else if (selectedCategory === 'HotDog') {
    filteredItems = HotDog;

  } else if (selectedCategory === 'Sandwiches') {
    filteredItems = Sandwiches;
  } else if (selectedCategory === 'Cocktails') {
    filteredItems = Cocktails;
  }
  else {
    filteredItems = [];
  }

  return (
    <>
      <h1 className="text-center">Cafe</h1>
      <div className="d-flex overflow-auto">
        {navproducts.map((product) => (
          <ResponsiveCard key={product.name} image={product.image} text={product.name} onClick={() => handleCategoryClick(product.id)} />
        ))}
      </div>

      <div className="d-flex flex-wrap">
        {filteredItems.map((item) => (
          <ItemCard key={item.name} name={item.name} description={item.description} price={item.price} imageUrl={item.imageUrl} />
        ))}
      </div>
    </>
  );
}
