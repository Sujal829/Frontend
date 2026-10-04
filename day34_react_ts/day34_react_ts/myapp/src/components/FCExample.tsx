import type { ReactNode } from "react";
import type React from "react";

type Props={
    label: string;
    optional?: string; // optional because of "?"
    children: ReactNode;
}

const FCExampe: React.FC<Props>=({label, optional, children})=>{

    return(
        <div>
            <h3>{label}</h3>
            {optional && <p>{optional}</p>}
            {children}
        </div>
    )
}

export default FCExampe;