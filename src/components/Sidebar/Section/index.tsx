import React from "react";

export default function Section({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="my-7">
      <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
        {name}
      </label>
      {children}
    </div>
  );
}
