export default function Fruit({ name, price, soldOut }) {
  return (
    <>
      <li>
        {name}
        {price}
        {soldOut ? "Soldout" : ""}
      </li>
    </>
  );
}
