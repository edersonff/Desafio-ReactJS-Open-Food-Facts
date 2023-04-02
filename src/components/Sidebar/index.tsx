import React from "react";
import Section from "./Section";
import Item from "./Section/Item";
import { BiHomeAlt } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { FiUsers } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#">
        <img className="w-auto h-7" src="/images/logo-coodesh.png" alt="" />
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6  h-full ">
          <div className="flex justify-between flex-col h-full">
            <div>
              <Section name="Principal">
                <Item
                  icon={<BiHomeAlt size={20} />}
                  name="Dashboard"
                  href="#"
                />
                <Item
                  icon={<FiUsers size={20} />}
                  name="Usuários admin"
                  href="#"
                />
              </Section>

              <Section name="Customização">
                <Item
                  icon={<BsGear size={20} />}
                  name="Configurações"
                  href="#"
                />
              </Section>
            </div>
            <div>
              <Item icon={<ImExit size={20} />} name="Sair" href="/" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
