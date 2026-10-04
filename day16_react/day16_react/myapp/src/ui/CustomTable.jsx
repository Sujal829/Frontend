function CustomTable({ data, rowClick }) {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=><tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td style={{cursor: 'pointer'}} onClick={()=>rowClick(item.id)}>Delete</td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default CustomTable
