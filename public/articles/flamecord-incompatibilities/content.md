# FlameCord Incompatibilities

## Introduction
FlameCord, a BungeeCord fork esteemed for its optimized performance, encounters compatibility issues with certain plugins, notably ViaVersion and BungeeTabListPlus. These issues arise due to FlameCord's prioritization of efficiency and the removal of deprecated features.

## FlameCord's Commitment to Performance
FlameCord distinguishes itself through its streamlined architecture, aimed at enhancing server performance under various conditions. Its development focus centers on eliminating inefficiencies and outdated components to ensure optimal server operation.

## Incompatibility with ViaVersion
ViaVersion, a widely-used plugin facilitating version interoperability in Minecraft, faces compatibility challenges with FlameCord due to differences in packet handling methods. ViaVersion relies on Entity Rewrite, a packet manipulation technique, which conflicts with FlameCord's streamlined approach to packet processing.
You can still use ViaVersion in your server if you install it on the Spigot servers instead of FlameCord.

## Incompatibility with BungeeTabListPlus
Similarly, FlameCord encounters compatibility issues with BungeeTabListPlus, a plugin designed for customizing tab lists in BungeeCord setups. BungeeTabListPlus also employs Entity Rewrite, leading to conflicts with FlameCord's optimized packet handling mechanism and impacting overall server performance.

## Impact on Performance
The utilization of Entity Rewrite by ViaVersion and BungeeTabListPlus results in a notable CPU overhead, averaging around 50%. This additional processing burden significantly diminishes server performance, impeding FlameCord's ability to operate at peak efficiency.

## Conclusion
While FlameCord's commitment to performance optimization is commendable, it inevitably leads to compatibility challenges with plugins relying on deprecated packet manipulation techniques like ViaVersion and BungeeTabListPlus. These issues underscore the importance of adapting plugins to accommodate evolving server architectures. Despite initial hurdles, FlameCord's emphasis on efficiency sets a new standard for Minecraft server hosting, demonstrating the importance of prioritizing performance in server development.