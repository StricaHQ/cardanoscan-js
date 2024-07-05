export type MetaDatum = {
  label: string;
  value: string;
};

export type PoolRelay = {
  port?: number | null;
  ipv4?: string | null;
  ipv6?: string | null;
  dnsName?: string;
  srvName?: string;
};

export type Redeemer = {
  index: number;
  tag: string;
  data: string;
  exUnits: {
    mem: number;
    steps: number;
  };
};

export type GenDelegationCert = {
  genesisHash: string;
  genesisDelegateHash: string;
  vrfKeyHash: string;
};
