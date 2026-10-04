import { useActionState } from "react";
import { useState } from "react";

// const [loading, setLoading]=useState(false);
// const handleSubmit=async()=>{
//     setLoading(true);
//     await save();
//     setLoading(false);
// }

async function submitAction(prevState, formData) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return { success: true };
}

const fetchUser = async (prevState) => {
  console.log(prevState);

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    users: data,
  };
};

const UseActionStateExample = () => {
  const [state, formAction, isPending] = useActionState(submitAction, {
    success: false,
  });

  const [data, action, isLoading] = useActionState(fetchUser, {
    users: [],
  });

  return (
    <div>
      <h1>UseActionStateExample</h1>
      <form action={formAction}>
        <input type="text" name="title" />
        <input type="text" name="body" />
        <button disabled={isPending} type="submit">
          Submit
        </button>
      </form>
      {isPending && <p>Loading...</p>}
      {state.success && <p>Success</p>}

      <button onClick={() => action("1")}>Fetch User</button>
      {isLoading && <p>Loading...</p>}
      {data.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UseActionStateExample;
