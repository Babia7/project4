export interface Switch {
  id: string;
  model: string;
  formFactor: 'Fixed configuration' | 'Modular chassis';
  height: '1RU' | '2RU' | '4RU' | '8RU' | '16RU';
  ports: {
    speed: ('10G' | '25G' | '40G' | '100G' | '400G')[];
    count: number;
    type: ('SFP' | 'QSFP' | 'OSFP')[];
    breakoutCapable: boolean;
  };
  deploymentLocations: (
    | 'Data center spine'
    | 'Data center leaf'
    | 'Campus core'
    | 'Campus distribution/aggregation'
    | 'Campus access'
    | 'WAN edge'
  )[];
  performance: {
    switchingCapacity: number; // in Tbps
    forwardingRate: number; // in Bpps
    latency: 'low' | 'medium' | 'high';
    bufferSize: number; // in MB
  };
  imageUrl: string;
}

export const switches: Switch[] = [
  {
    id: '7050X3',
    model: '7050X3',
    formFactor: 'Fixed configuration',
    height: '1RU',
    ports: {
      speed: ['10G', '25G', '100G'],
      count: 32,
      type: ['QSFP', 'SFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center leaf', 'Campus distribution/aggregation'],
    performance: {
      switchingCapacity: 6.4,
      forwardingRate: 2.4,
      latency: 'low',
      bufferSize: 32,
    },
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: '7280R3',
    model: '7280R3',
    formFactor: 'Fixed configuration',
    height: '2RU',
    ports: {
      speed: ['10G', '25G', '40G', '100G'],
      count: 48,
      type: ['QSFP', 'SFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center spine', 'WAN edge'],
    performance: {
      switchingCapacity: 12.8,
      forwardingRate: 4.8,
      latency: 'low',
      bufferSize: 64,
    },
    imageUrl: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: '7800R3',
    model: '7800R3',
    formFactor: 'Modular chassis',
    height: '8RU',
    ports: {
      speed: ['100G', '400G'],
      count: 96,
      type: ['QSFP', 'OSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center spine', 'Campus core'],
    performance: {
      switchingCapacity: 76.8,
      forwardingRate: 28.8,
      latency: 'low',
      bufferSize: 128,
    },
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3',
  },
  {
    id: '7060X4',
    model: '7060X4',
    formFactor: 'Fixed configuration',
    height: '1RU',
    ports: {
      speed: ['10G', '25G', '100G', '400G'],
      count: 32,
      type: ['OSFP', 'QSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center leaf', 'Data center spine'],
    performance: {
      switchingCapacity: 12.8,
      forwardingRate: 4.8,
      latency: 'low',
      bufferSize: 42,
    },
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3',
  },
  {
    id: '7368X4',
    model: '7368X4',
    formFactor: 'Fixed configuration',
    height: '2RU',
    ports: {
      speed: ['100G', '400G'],
      count: 64,
      type: ['OSFP', 'QSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center spine', 'Data center leaf'],
    performance: {
      switchingCapacity: 25.6,
      forwardingRate: 9.52,
      latency: 'low',
      bufferSize: 88,
    },
    imageUrl: 'https://images.unsplash.com/photo-1597838816882-4435b1977fbe?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3',
  },
  {
    id: '7500R3',
    model: '7500R3',
    formFactor: 'Modular chassis',
    height: '4RU',
    ports: {
      speed: ['100G', '400G'],
      count: 48,
      type: ['QSFP', 'OSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center spine', 'Campus core', 'WAN edge'],
    performance: {
      switchingCapacity: 38.4,
      forwardingRate: 14.4,
      latency: 'low',
      bufferSize: 96,
    },
    imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3',
  },
  {
    id: '7020R',
    model: '7020R',
    formFactor: 'Fixed configuration',
    height: '1RU',
    ports: {
      speed: ['10G', '25G'],
      count: 24,
      type: ['SFP'],
      breakoutCapable: false,
    },
    deploymentLocations: ['Campus access', 'Campus distribution/aggregation'],
    performance: {
      switchingCapacity: 2.4,
      forwardingRate: 0.9,
      latency: 'medium',
      bufferSize: 16,
    },
    imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: '7150',
    model: '7150',
    formFactor: 'Fixed configuration',
    height: '1RU',
    ports: {
      speed: ['10G', '40G'],
      count: 52,
      type: ['SFP', 'QSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Campus distribution/aggregation', 'Data center leaf'],
    performance: {
      switchingCapacity: 1.44,
      forwardingRate: 1.08,
      latency: 'low',
      bufferSize: 12,
    },
    imageUrl: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: '7300X3',
    model: '7300X3',
    formFactor: 'Modular chassis',
    height: '16RU',
    ports: {
      speed: ['10G', '25G', '40G', '100G'],
      count: 256,
      type: ['SFP', 'QSFP'],
      breakoutCapable: true,
    },
    deploymentLocations: ['Data center spine', 'Campus core'],
    performance: {
      switchingCapacity: 50,
      forwardingRate: 18.6,
      latency: 'medium',
      bufferSize: 256,
    },
    imageUrl: 'https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: '7010T',
    model: '7010T',
    formFactor: 'Fixed configuration',
    height: '1RU',
    ports: {
      speed: ['10G'],
      count: 48,
      type: ['SFP'],
      breakoutCapable: false,
    },
    deploymentLocations: ['Campus access'],
    performance: {
      switchingCapacity: 0.176,
      forwardingRate: 0.132,
      latency: 'medium',
      bufferSize: 8,
    },
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  }
];