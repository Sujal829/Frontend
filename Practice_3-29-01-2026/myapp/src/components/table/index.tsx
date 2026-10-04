import TBody from "./TBody";
import THeader from "./THeader";
import type { TableProps } from "./types";

const Table = <T,>({ data, columns }: TableProps<T>) => {
    return (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <THeader columns={columns} />
            <TBody data={data} columns={columns} />
        </table>
    )
}

export default Table;