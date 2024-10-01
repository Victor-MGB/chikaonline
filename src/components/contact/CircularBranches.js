import React from 'react';

// Generate branch data (up to 20 branches)
const branches = Array.from({ length: 20 }, (_, i) => ({
  name: `Branch ${i + 1}`,
  id: i + 1,
}));

const CircularBranches = () => {
  // Calculate the angle for each branch based on the number of branches
  const angleStep = 360 / branches.length;

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Central circle */}
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10">
        <p className="text-white font-bold">Main</p>
      </div>

      {/* Render each branch as a circle */}
      {branches.map((branch, index) => {
        const angle = angleStep * index; // Calculate angle for each branch
        const x = 35 * Math.cos((angle * Math.PI) / 180); // X position
        const y = 35 * Math.sin((angle * Math.PI) / 180); // Y position

        return (
          <div
            key={branch.id}
            className="absolute flex flex-col items-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {/* Branch circle */}
            <div
              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate__animated animate__zoomIn"
              title={branch.name}
            >
              <p className="text-xs text-white">{branch.id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularBranches;
