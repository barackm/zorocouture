import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

const Tabs = ({ tabs, activeTab, onChange, className = "" }: TabsProps) => {
  return (
    <div className={`flex gap-2 p-1 bg-gray-100/80 rounded-full ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            text-sm font-medium px-6 py-2.5 rounded-full
            transition-all duration-300 relative
            ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {activeTab === tab.id && (
            <span className="absolute inset-0 bg-black rounded-full" />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
