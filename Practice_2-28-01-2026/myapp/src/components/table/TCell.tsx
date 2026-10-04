import { memo } from "react";
import type { Column } from "./types";

interface TCellProps<T> {
    column: Column<T>;
    value: any;
}

const TCell = <T,>({ column, value }: TCellProps<T>) => {
    return (
        <td>
            {column.render ? column.render(value[column.key], value) : String(value[column.key])}
        </td>
    )
}

export default memo(TCell) as typeof TCell;