export interface Option {
    id: number;
    label: string;
}

export const OPTIONS: Option[] = [
    { id: 1, label: 'React' },
    { id: 2, label: 'Angular' },
    { id: 3, label: 'Vue' },
    { id: 4, label: 'Svelte' },
    { id: 5, label: 'Next' },
    { id: 6, label: 'Node' },
    { id: 7, label: 'HTML 5' },
    { id: 8, label: 'CSS 3' },
    { id: 9, label: 'Bootstrap' },
    { id: 10, label: 'Tailwind' },
]

export const HIERARCHICAL_OPTIONS = [
    {
        id: 1,
        label: "Frontend",
        children: [
            { id: 11, label: "React" },
            { id: 12, label: "Angular" },
            { id: 13, label: "Vue" },
        ],
    },
    {
        id: 2,
        label: "Backend",
        children: [
            { id: 21, label: "Node.js" },
            { id: 22, label: "Python" },
            { id: 23, label: "Java" },
        ],
    },
    {
        id: 3,
        label: "Database",
        children: [
            { id: 31, label: "MySQL" },
            { id: 32, label: "PostgreSQL" },
            { id: 33, label: "MongoDB" },
        ],
    },
];