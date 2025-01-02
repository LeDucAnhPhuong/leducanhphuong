import React from "react";

interface TerminalProps {
  children: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-card-foreground px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-white text-sm font-medium">Terminal</div>
        </div>

        <div className="p-4 font-mono text-sm text-green-400">{children}</div>
      </div>
    </div>
  );
};

export default Terminal;
