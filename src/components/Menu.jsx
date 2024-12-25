import { Pizza } from "./Pizza";
export function Menu({pizzas})
{
    return (
<main className="menu">
      <h2>Our menu</h2>
      <p>
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name}  />
        ))}
      </ul>
    </main>
    );
}