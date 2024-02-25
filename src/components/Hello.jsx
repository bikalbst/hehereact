function Hello({ person }) {
  return (
    <h1>
      {person.name}, {person.message}, {person.year}
    </h1>
  );
}

export default Hello;
