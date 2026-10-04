import GreatGrandChild from "./GreatGrandChild";

function GrandChild({ user }) {
  return (
    <div>
      <GreatGrandChild users={user}/>
    </div>
  )
}

export default GrandChild;
