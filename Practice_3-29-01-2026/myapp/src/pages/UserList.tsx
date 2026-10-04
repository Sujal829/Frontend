import { useEffect, useState } from "react";
import Table from "../components/table";
import type { AccordionItemProps } from "../components/accordion/type";
import Accordion from "../components/custom-accordion/Accordion";
import { AccordionItem } from "../components/custom-accordion/AccordionItem";
import { AccordionHeader } from "../components/custom-accordion/AccordionHeader";
import { AccordionBody } from "../components/custom-accordion/AccordionBody";

type IUser = {
  id: number;
  name: string;
  email: string;
};

const Users_Column = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

const UserList: React.FC = () => {
  const [users, setUsers] = useState<AccordionItemProps[]>([]);
  const [open, setOpen] = useState<string | string[]>([]);

  const toggle = (id: string) => {
    setOpen((prev: string | string[]) =>
      prev.includes(id) && Array.isArray(prev)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  // for single accordion use below handler
  //   const toggle = (id: string) => {
  //     setOpen((prev: string) => (prev === id ? "" : id));
  //   };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();

      const users: AccordionItemProps[] = data.map((user: IUser) => ({
        id: user.id.toString(),
        title: user.name,
        content: "",
      }));
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UserList;
