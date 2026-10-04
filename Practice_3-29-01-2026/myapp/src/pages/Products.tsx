import { useState } from "react";
import Table from "../components/table";
import { PRODUCTS } from "../utlis/mock";


const Products = () => {
    const [count, setCount] = useState<number>(0);
    const TABLE_COLUMNS = [
        { key: "id", label: "ID", render: (value: any) => <span style={{ color: "red" }}>{value}</span> },
        { key: "name", label: "Name" },
        { key: "price", label: "Price" },
        { key: "actions", label: "Actions", render: (__value: any, row: any) => <button onClick={() => alert(row.id)}>click</button> },
    ];
    return (
        <div>
            <h1>Products</h1>
            <Table data={PRODUCTS} columns={TABLE_COLUMNS} />
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default Products;