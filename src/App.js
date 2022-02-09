import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import cars from "./data";

const allCategories = ["all", ...new Set(cars.map((car) => car.category))];

function App() {
  const [menuItems, setMenuItems] = useState(cars);
  console.log(menuItems);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItems(cars);
      return;
    }
    const newCars = cars.filter((car) => car.category === category);
    setMenuItems(newCars);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Car Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterCategories={filterCategories}
          categories={categories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
