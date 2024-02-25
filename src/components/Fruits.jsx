import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 12, soldOut: true },
    { name: "Banana", price: 14, soldOut: false },
    { name: "Mango", price: 22, soldOut: true },
    { name: "Papaya", price: 10, soldOut: true },
    { name: "Kiwi", price: 25, soldOut: false },
    { name: "Litchi", price: 18, soldOut: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
