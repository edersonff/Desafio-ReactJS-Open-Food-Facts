import React from "react";

export default function Item({
  icon,
  name,
  href = "#",
}: {
  icon: React.ReactNode;
  name: string;
  href?: string;
}) {
  return (
    <a
      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
      href={href}
    >
      {icon}

      <span className="mx-2 text-sm font-medium">{name}</span>
    </a>
  );
}
