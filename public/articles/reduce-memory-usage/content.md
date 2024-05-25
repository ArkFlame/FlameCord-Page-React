# FlameCord Update 2.1.0 Summary

**Memory and CPU Improvements**:
FlameCord's latest update brings significant performance enhancements. The update reworks buffer usage within Netty, the network framework used by BungeeCord. By reusing buffers for compression and decompression, FlameCord reduces the frequency of garbage collection. This optimization lowers overall CPU and memory usage, leading to better server performance.

**Key Features of FlameCord**:

1. **Performance Enhancements**:
   - FlameCord is a fork of Waterfall, itself an enhanced version of BungeeCord, designed to boost server performance.
   - The update introduces high-performance compression methods to handle data more efficiently, ensuring faster and lighter data transmission.

2. **Memory Optimization**:
   - The new memory management approach optimizes RAM usage, making FlameCord more efficient than alternatives like Velocity and BungeeCord.

3. **Anti-Bot and DDoS Protection**:
   - FlameCord includes robust anti-bot checks to prevent server crashes during DDoS attacks, providing enhanced security for public servers.

4. **Extended Version Support and Security**:
   - Offers extended Minecraft version support along with additional security and exploit protection features, ensuring a more secure and versatile server environment.

**Why Choose FlameCord**:
FlameCord's combination of performance improvements, efficient memory usage, and strong security features makes it an excellent choice for enhancing Minecraft server performance and reliability. It is especially beneficial for public servers needing robust protection against bot attacks and DDoS threats.