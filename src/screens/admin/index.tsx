import React from "react";
import Sidebar from "../../components/Sidebar";
import { ImExit } from "react-icons/im";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10 w-full h-full">
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-semibold mb-3">Admin</h1>
          <button className="bg-red-500 w-10 h-10 center rounded-md ">
            <ImExit size={20} className="text-white" />
          </button>
        </div>
        <hr className="w-full border-gray-300" />
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </div>
  );
}
