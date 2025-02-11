import React, { useState, useMemo } from 'react';
import { switches, Switch } from './data/switches';
import { SwitchCard } from './components/SwitchCard';
import { FilterSection } from './components/FilterSection';
import { LayoutGrid, List, RefreshCw } from 'lucide-react';

function App() {
  const [formFactor, setFormFactor] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [portSpeed, setPortSpeed] = useState<string>('');
  const [minPorts, setMinPorts] = useState<number>(0);
  const [deploymentLocation, setDeploymentLocation] = useState<string>('');
  const [minSwitchingCapacity, setMinSwitchingCapacity] = useState<number>(0);
  const [latency, setLatency] = useState<string>('');
  const [view, setView] = useState<'list' | 'detailed'>('list');

  const filteredSwitches = useMemo(() => {
    return switches.filter((sw) => {
      if (formFactor && sw.formFactor !== formFactor) return false;
      if (height && sw.height !== height) return false;
      if (portSpeed && !sw.ports.speed.includes(portSpeed as any)) return false;
      if (minPorts && sw.ports.count < minPorts) return false;
      if (deploymentLocation && !sw.deploymentLocations.includes(deploymentLocation as any))
        return false;
      if (minSwitchingCapacity && sw.performance.switchingCapacity < minSwitchingCapacity)
        return false;
      if (latency && sw.performance.latency !== latency) return false;
      return true;
    });
  }, [
    formFactor,
    height,
    portSpeed,
    minPorts,
    deploymentLocation,
    minSwitchingCapacity,
    latency,
  ]);

  const resetFilters = () => {
    setFormFactor('');
    setHeight('');
    setPortSpeed('');
    setMinPorts(0);
    setDeploymentLocation('');
    setMinSwitchingCapacity(0);
    setLatency('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Arista Switch Selector</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded ${
                view === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('detailed')}
              className={`p-2 rounded ${
                view === 'detailed' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={resetFilters}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>

            <FilterSection title="Form Factor">
              <select
                value={formFactor}
                onChange={(e) => setFormFactor(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any</option>
                <option value="Fixed configuration">Fixed configuration</option>
                <option value="Modular chassis">Modular chassis</option>
              </select>
            </FilterSection>

            <FilterSection title="Height">
              <select
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any</option>
                <option value="1RU">1RU</option>
                <option value="2RU">2RU</option>
                <option value="4RU">4RU</option>
                <option value="8RU">8RU</option>
                <option value="16RU">16RU</option>
              </select>
            </FilterSection>

            <FilterSection title="Port Speed">
              <select
                value={portSpeed}
                onChange={(e) => setPortSpeed(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any</option>
                <option value="10G">10G</option>
                <option value="25G">25G</option>
                <option value="40G">40G</option>
                <option value="100G">100G</option>
                <option value="400G">400G</option>
              </select>
            </FilterSection>

            <FilterSection title="Minimum Ports">
              <input
                type="number"
                value={minPorts}
                onChange={(e) => setMinPorts(parseInt(e.target.value) || 0)}
                className="w-full p-2 border rounded"
                min="0"
              />
            </FilterSection>

            <FilterSection title="Deployment Location">
              <select
                value={deploymentLocation}
                onChange={(e) => setDeploymentLocation(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any</option>
                <option value="Data center spine">Data center spine</option>
                <option value="Data center leaf">Data center leaf</option>
                <option value="Campus core">Campus core</option>
                <option value="Campus distribution/aggregation">
                  Campus distribution/aggregation
                </option>
                <option value="Campus access">Campus access</option>
                <option value="WAN edge">WAN edge</option>
              </select>
            </FilterSection>

            <FilterSection title="Min. Switching Capacity (Tbps)">
              <input
                type="number"
                value={minSwitchingCapacity}
                onChange={(e) =>
                  setMinSwitchingCapacity(parseInt(e.target.value) || 0)
                }
                className="w-full p-2 border rounded"
                min="0"
                step="0.1"
              />
            </FilterSection>

            <FilterSection title="Latency">
              <select
                value={latency}
                onChange={(e) => setLatency(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Any</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </FilterSection>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredSwitches.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <p className="text-gray-500 text-lg">
                    No switches match your criteria. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                filteredSwitches.map((sw) => (
                  <SwitchCard key={sw.id} switch={sw} view={view} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;