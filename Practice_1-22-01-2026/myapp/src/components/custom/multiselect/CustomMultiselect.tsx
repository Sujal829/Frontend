import { useEffect, useRef, useState } from "react";
import { OPTIONS } from "../../../utlis/mock";
import "./index.css"
import CustomOption from "./CustomOption";

const CustomMultiselect = () => {
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

    const toggleOption = (id: number) => {
        setSelectedOptions((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }

    const selectedLabels = OPTIONS.reduce((acc, option) => {
        if (selectedOptions.includes(option.id)) {
            acc.push(option.label);
        }
        return acc;
    }, [] as string[]).join(", ");

    return (
        <div ref={selectRef} className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOptions.length > 0 ? (
                    <span>
                        {selectedLabels}
                    </span>
                ) : (
                    <span>Select Options</span>
                )}
            </div>
            {isOpen && (
                <CustomOption
                    options={OPTIONS}
                    selected={selectedOptions}
                    toggleAction={toggleOption}
                    click={setIsOpen}
                />
            )}
        </div>
    )
}

export default CustomMultiselect;