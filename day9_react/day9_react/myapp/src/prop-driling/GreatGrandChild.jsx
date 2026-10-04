export default function GreatGrandChild({ users }) {
  return (
    <div>GreatGrandChild
        <div>
            {JSON.stringify(users)}
            {users?.name}  
            {/* // undefined.name */}
        </div>
    </div>
  )
}
