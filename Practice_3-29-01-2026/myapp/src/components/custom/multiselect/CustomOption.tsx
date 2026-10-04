import type { Option } from "../../../utlis/mock";

interface Props {
    options: Option[];
    selected: number[];
    toggleAction: (id: number, childIds?: number[]) => void;
    click: (value: boolean) => void;
    isHierarchical?: boolean;
    parent?: any;
    childIds?: number[];
    toggleChild?: (parentId: number, childId: number, childIds: number[]) => void;
}
const CustomOption = ({ options, selected, toggleAction, click, isHierarchical, parent, childIds, toggleChild }: Props) => {
    return (
        isHierarchical ? (
            <div key={parent?.id}>
                <label className="dropdown-item parent">
                    <input
                        type="checkbox"
                        checked={selected.includes(parent?.id)}
                        onChange={() => toggleAction(parent?.id, childIds)}
                    />
                    {parent?.label}
                </label>
                {parent?.children?.map((child: any) => (
                    <label key={child.id} className="dropdown-item child">
                        <input
                            type="checkbox"
                            checked={selected.includes(child.id)}
                            onChange={() => toggleChild && toggleChild(parent.id, child.id, childIds)}
                        />
                        {child.label}
                    </label>
                ))}
            </div>
        ) :
            <div className="dropdown-list">
                {options.map((option) => (
                    <label key={option.id} className="dropdown-item">
                        <input
                            type="checkbox"
                            checked={selected.includes(option.id)}
                            onChange={() => toggleAction(option.id)}
                        />
                        {option.label}
                    </label>
                ))}
                <div>
                    <button onClick={() => click(false)}>Ok</button>
                </div>
            </div>
    )
}

export default CustomOption;