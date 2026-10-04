type ListProps<T> = {
    items:T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({items, renderItem}:ListProps<T>){
    return <ul>{items.map(renderItem)}</ul>
}

export default List;