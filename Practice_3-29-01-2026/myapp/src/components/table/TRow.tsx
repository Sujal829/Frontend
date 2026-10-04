import { memo } from "react";
import TCell from "./TCell";
import type { TableRowProps } from "./types";

const TRow = <T,>({ row, columns }: TableRowProps<T>) => {

    return (
        <tr>
            {columns?.map((column) => {
                return (
                    <TCell key={String(column.key)} value={row} column={column} />
                )
            })}
        </tr>
    )
}

export default memo(TRow) as typeof TRow;