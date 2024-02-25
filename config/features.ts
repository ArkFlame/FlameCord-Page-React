import { splitArray } from '@/utils/array-utils';

// Mini features (Bot features)
export interface MiniFeature {
  title: string;
  description: string;
}

export const MiniFeatures: MiniFeature[] = [
  {
    title: 'IPTables Integration',
    description:
      ' Integrate with IPTables to ensure high performance DDoS attack prevention systems.',
  },
  {
    title: 'Account Firewall',
    description:
      'Detect and prevent malicious accounts from accessing your server.',
  },
  {
    title: 'Country Filtering',
    description:
      'Block or allow players based on specific countries, bolstering security.',
  },
  {
    title: 'FastChat Control',
    description:
      'Regulate rapid chat messages to curb spam and maintain chat quality.',
  },
  {
    title: 'Firewall Exception Management',
    description:
      'Define exceptions to allow specific types of packets through the firewall.',
  },
  {
    title: 'Nickname Blocking',
    description:
      'Block predefined or custom nicknames often used by bots to infiltrate servers.',
  },
  {
    title: 'Password Protection',
    description:
      'Thwart unauthorized access by enforcing limits on password attempts.',
  },
  {
    title: 'Rate Limiting',
    description:
      'Control connections and pings per second to combat bot floods.',
  },
  {
    title: 'Reconnect Control',
    description: 'Manage player reconnect attempts and duration to deter bots.',
  },
  {
    title: 'Packet Analysis',
    description:
      'Analyze and monitor incoming packets for anomalies and suspicious behavior.',
  },
  {
    title: 'Proxy/Anti-VPN Detection',
    description:
      'Identify Proxy & VPN users and take action to safeguard the server.',
  },
  {
    title: 'Proxy Whitelisting',
    description:
      'Allow specific IP addresses while blocking others to ensure legitimate access.',
  },
  {
    title: 'External Lists Integration',
    description:
      'Utilize external lists of known malicious IPs to enhance protection.',
  },
  {
    title: 'Customization',
    description:
      "Tailor antibot settings to your server's needs for a personalized protection shield.",
  },
];

// Internal usage :p
export const MiniFeaturesGroups = splitArray(MiniFeatures, 2);
