export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Markdown is supported in the answer field.
 *
 * Examples:
 *  - **Bold**
 *  - *Italic*
 *  - [Link](https://example.com)
 */
export const FAQs: FAQ[] = [
  {
    question: 'How much RAM should I assign for FlameCord?',
    answer:
      'It depends on server specs, player count, and plugins, but 4GB is usually sufficient for most servers.',
  },
  {
    question: 'Can I use FlameCord with ViaVersion?',
    answer:
      "Yes, but place the ViaVersion jar in the spigot server's plugins folder, not FlameCord's. This is essential for optimal resource usage, saving 50% of server resources. [Download ViaVersion here](https://www.spigotmc.org/resources/viaversion.19254/).",
  },
  {
    question: 'Can I use FlameCord with Geyser?',
    answer:
      'Yes, FlameCord is compatible with Geyser, but be aware that Geyser may require more than 4GB of RAM due to its resource-intensive nature. [Download Geyser here](https://geysermc.org/).',
  },
  {
    question: 'I have an error in the console. What should I do?',
    answer:
      'Read the error message to identify the cause (e.g., plugin name). Delete the problematic plugin. If unsure, seek assistance in our Discord Server.',
  },
  {
    question: 'Can I use gradients and hex colors in FlameCord Motd?',
    answer:
      'Yes, you can use them in the motd using the IridiumColorAPI format. Examples can be found here in the [usage section](https://github.com/Iridium-Development/IridiumColorAPI).',
  },
  {
    question: 'I bought the permanent license, but it says it will expire.',
    answer:
      'Activation may take up to 3 days. If the issue persists, contact support on our Discord Server.',
  },
  {
    question: 'My server is crashing during an attack, what should I do?',
    answer:
      "Check for errors. Is it out of memory? Identify plugins causing high memory usage or crashes. Try minimizing plugins. If the server isn't closing but not accepting connections, consider a hosting service with more bandwidth or CPU.",
  },
  {
    question: 'My memory/CPU usage is high.',
    answer:
      'It could be a plugin issue. Try reducing the number of installed plugins. Utilize the Spark plugin on BungeeCord (sparkb command) and run a profiler or heap dump to identify the source of the high usage.',
  },
  {
    question: 'I have a "Too many accounts" error.',
    answer:
      'This indicates exceeding the allowed players per IP. It may be due to shared IPs or server misconfiguration. If you\'re a player, contact the owner. If you\'re the owner, reset IP database with "/flamecord reload," adjust account limit in flamecord.yml, and ensure proper IP forwarding, especially with reverse proxies like TCPShield.',
  },
];
