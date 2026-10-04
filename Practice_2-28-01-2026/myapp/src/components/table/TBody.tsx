import TRow from "./TRow";
import type { TableProps } from "./types";

const TBody = <T,>({ data, columns }: TableProps<T>) => {
    return (
        <tbody>
            {data?.map((row) => {
                return (
                    <TRow key={row.id} row={row} columns={columns} />
                )
            })}
        </tbody>
    )
}

export default TBody;