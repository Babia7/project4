import React from 'react';
import { Switch } from '../data/switches';
import { Network, Cpu, Server, Gauge } from 'lucide-react';

interface SwitchCardProps {
  switch: Switch;
  view: 'list' | 'detailed';
}

export function SwitchCard({ switch: sw, view }: SwitchCardProps) {
  if (view === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <img
            src={sw.imageUrl}
            alt={sw.model}
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <h3 className="text-xl font-semibold">{sw.model}</h3>
            <p className="text-gray-600">{sw.formFactor} - {sw.height}</p>
            <p className="text-gray-500 text-sm mt-1">
              {sw.ports.count} ports • Up to {Math.max(...sw.ports.speed.map(s => parseInt(s)))}G
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <img
          src={sw.imageUrl}
          alt={sw.model}
          className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">{sw.model}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Server className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-medium">Form Factor</p>
                <p className="text-gray-600">{sw.formFactor} - {sw.height}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Network className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <p className="font-medium">Ports</p>
                <p className="text-gray-600">
                  {sw.ports.count} x {sw.ports.speed.join('/')}
                  <br />
                  {sw.ports.type.join(', ')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Cpu className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-medium">Performance</p>
                <p className="text-gray-600">
                  {sw.performance.switchingCapacity} Tbps
                  <br />
                  {sw.performance.forwardingRate} Bpps
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Gauge className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="font-medium">Deployment</p>
                <p className="text-gray-600">{sw.deploymentLocations.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}