'use client';

import { useState } from 'react';

const TriggerXJobForm = () => {
  const [triggerType, setTriggerType] = useState('');
  const [linkedJobs, setLinkedJobs] = useState([]);

  const handleAddLinkedJob = () => {
    if (linkedJobs.length < 2) {
      setLinkedJobs([...linkedJobs, {}]);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg w-[70%] mt-[200px] text-black">
      <h2 className="text-xl font-bold mb-4">TriggerX Job Creation</h2>
      
      {/* Trigger Type Selection */}
      <label className="block font-semibold mb-2">Select Trigger Type</label>
      <select
        className="w-full p-2 border rounded-md mb-4"
        value={triggerType}
        onChange={(e) => setTriggerType(e.target.value)}
      >
        <option value="">Select</option>
        <option value="time">Time-based Trigger</option>
        <option value="event">Event-based Trigger</option>
        <option value="condition">Condition-based Trigger</option>
      </select>
      
      {/* Time-based Trigger Fields */}
      {triggerType === 'time' && (
        <div>
          <label className="block font-semibold">Network</label>
          <select className="w-full p-2 border rounded-md mb-4">
            <option>Optimism</option>
            <option>Base</option>
          </select>
          
          <div className="grid grid-cols-3 gap-2">
            <input type="number" placeholder="Years" className="p-2 border rounded-md" />
            <input type="number" placeholder="Months" className="p-2 border rounded-md" />
            <input type="number" placeholder="Days" className="p-2 border rounded-md" />
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4">
            <input type="number" placeholder="Hours" className="p-2 border rounded-md" />
            <input type="number" placeholder="Minutes" className="p-2 border rounded-md" />
            <input type="number" placeholder="Seconds" className="p-2 border rounded-md" />
          </div>
          
          <input type="text" placeholder="Contract Address" className="w-full p-2 border rounded-md mt-4" />
          <input type="text" placeholder="Target Function" className="w-full p-2 border rounded-md mt-4" />
          <input type="text" placeholder="IPFS Code URL" className="w-full p-2 border rounded-md mt-4" />
          <button className="w-full bg-blue-500 text-white p-2 mt-4 rounded-md">Create Job</button>
        </div>
      )}
      
      {/* Condition-based Trigger Fields */}
      {triggerType === 'condition' && (
        <div>
          <label className="block font-semibold">Network</label>
          <select className="w-full p-2 border rounded-md mb-4">
            <option>Optimism</option>
            <option>Base</option>
          </select>
          <input type="text" placeholder="Contract Address" className="w-full p-2 border rounded-md mt-4" />
          <input type="text" placeholder="Target Function" className="w-full p-2 border rounded-md mt-4" />
          <input type="text" placeholder="IPFS Code URL" className="w-full p-2 border rounded-md mt-4" />
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white p-2 rounded-md">Create Job</button>
            <button className="bg-gray-500 text-white p-2 rounded-md" onClick={handleAddLinkedJob}>Link Job</button>
          </div>
        </div>
      )}
      
      {/* Event-based Trigger Fields */}
      {triggerType === 'event' && (
        <div>
          <label className="block font-semibold">Network</label>
          <select className="w-full p-2 border rounded-md mb-4">
            <option>Optimism</option>
            <option>Base</option>
          </select>
          <input type="text" placeholder="Event Contract Address" className="w-full p-2 border rounded-md mt-4" />
          <input type="text" placeholder="Target Event" className="w-full p-2 border rounded-md mt-4" />
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white p-2 rounded-md">Create Job</button>
            <button className="bg-gray-500 text-white p-2 rounded-md" onClick={handleAddLinkedJob}>Link Job</button>
          </div>
        </div>
      )}
      
      {/* Linked Jobs */}
      {linkedJobs.map((_, index) => (
        <div key={index} className="mt-4 p-4 border rounded-md bg-gray-100">
          <h3 className="font-semibold">Linked Job {index + 1}</h3>
          <input type="text" placeholder="Contract Address" className="w-full p-2 border rounded-md mt-2" />
          <input type="text" placeholder="Target Function" className="w-full p-2 border rounded-md mt-2" />
          <input type="text" placeholder="IPFS Code URL" className="w-full p-2 border rounded-md mt-2" />
        </div>
      ))}
    </div>
  );
};

export default TriggerXJobForm;
