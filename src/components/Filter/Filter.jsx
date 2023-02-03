export default function Filter({ onChange }) {
  const fu = e => {
    console.log(e.target.value);
  };
  return <input type="text" name="filter" onChange={fu} />;
}
