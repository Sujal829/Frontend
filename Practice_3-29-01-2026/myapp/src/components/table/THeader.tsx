import React, { memo } from "react";
import type { Column } from "./types";

interface THeaderProps<T> {
    columns: Column<T>[];
}

const THeader = <T,>({ columns }: THeaderProps<T>) => {
    return (
        <thead>
            <tr>
                {columns?.map((column) => (
                    <th key={String(column.key)} style={{ border: "1px solid #ccc" }}>{column.label}</th>
                ))}
            </tr>
        </thead>
    )
}

export default memo(THeader) as typeof THeader