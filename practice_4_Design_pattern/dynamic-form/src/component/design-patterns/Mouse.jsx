// render props pattern
export const Mouse = ({ render }) => {
  const [x, setX] = useState(0);
  return <div onMouseMove={(e) => setX(e.clientX)}>{render(x)}</div>;
};

{
  /* <Mouse render={(x) => <p>{x}</p>} />; */
}
