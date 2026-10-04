import { useEffect, useRef, useState } from "react";
import { HIERARCHICAL_OPTIONS } from "../../../utlis/mock";
import "./index.css"
import CustomOption from "./CustomOption";

const CustomHierarchicalMultiselect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, []);

    const toggleOption = (id: number, childIds?: number[]) => {
        const newSelected = new Set(selectedOptions);
        const isParentSelected = newSelected.has(id);

        if (isParentSelected) {
            newSelected.delete(id);
            childIds?.forEach(childId => newSelected.delete(childId));
        } else {
            newSelected.add(id);
            childIds?.forEach(childId => newSelected.add(childId));
        }
        setSelectedOptions(Array.from(newSelected));
    }

    const toggleChild = (parentId: number, childId: number, siblings: number[]) => {
        const newSelected = new Set(selectedOptions);
        const isChildSelected = newSelected.has(childId);
        if (isChildSelected) {
            newSelected.delete(childId);
        } else {
            newSelected.add(childId);
            newSelected.add(parentId);
        }
        const anyChildSelected = siblings.some(siblingId => newSelected.has(siblingId));
        if (!anyChildSelected) {
            newSelected.delete(parentId);
        }

        setSelectedOptions(Array.from(newSelected));
    }

    const selectedLabels = HIERARCHICAL_OPTIONS.reduce((acc, option) => {
        if (selectedOptions.includes(option.id)) {
            acc.push({ parent: option.label, children: option.children.map(child => child.label) });
        }
        return acc;
    }, [] as { parent: string, children: string[] }[]);

    return (
        <div ref={selectRef} className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOptions.length > 0 ? (
                    <span>
                        {selectedLabels.map((item, index) => (
                            <span key={index}>
                                {item.parent} ({item.children.join(", ")})
                            </span>
                        ))}
                    </span>
                ) : (
                    <span>Select Options</span>
                )}
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {HIERARCHICAL_OPTIONS.map((parent) => {
                        const childIds = parent.children.map((child) => child.id);

                        return (
                            <CustomOption
                                key={parent.id}
                                options={parent.children}
                                selected={selectedOptions}
                                toggleAction={toggleOption}
                                click={setIsOpen}
                                isHierarchical
                                parent={parent}
                                childIds={childIds}
                                toggleChild={toggleChild}
                            />
                        )
                    })}
                    <div>
                        <button onClick={() => setIsOpen(false)}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomHierarchicalMultiselect;