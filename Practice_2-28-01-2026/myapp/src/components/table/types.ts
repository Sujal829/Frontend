export interface Column<T> {
    key: string;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}

export interface TableRowProps<T> {
    row: T;
    columns: Column<T>[];
}