import GrandChild from "./GrandChild1"

function Child1({ userData }) {
  return (
    <div>
        {userData.name}
        <GrandChild users={userData}/>
    </div>
  )
}

export default Child1
