## Logger
Settings for logging various server activities.

- `initialhandler`: If `false`, disables logging of initial connection handling.
- `exceptions`: If `true`, logs exception traces for debugging.
- `dump`: If `false`, disables memory dump logging.
- `haproxy`: If `false`, disables HAProxy-specific logging.
- `detailed-connect-errors`: If `true`, provides detailed errors during connection issues.

---

## Custom MOTD (Message of the Day)
Customize the MOTD displayed to players.

- `enabled`: Enables the custom MOTD feature.
- `server-placeholders`: Use placeholders for server info if `true`. (%server_<servername>%) to show playercount of a server.
- `motds`: A list of randomly selected MOTD lines supporting color codes and formatting.
  - Example:
    ```
    &8          &8&m-------&c&kii&r &e&lArkFlame Network&r &c&kii&8&m-------&r
    &a           &lModo Survival &7(Conectados: &e%onlineplayers%&7/&e%maxplayers%&7)
    ```
- `sample`: Displays custom sample messages in the server list. (Player list hover)
  - `enabled`: Enables sample messages.
  - `samples`: List of sample lines.
- `protocol`: Customizes the protocol name.
  - `enabled`: If `true`, shows a custom protocol name.
  - `name`: The protocol name to display.
- `maxplayers`: Fakes the maximum player count.
  - `enabled`: Enables max player count.
  - `amount`: Number of max players to show in motd.
  - `justonemore`: Always have one more slot dynamically.
- `fakeplayers`: Adds fake players to motd.
  - `enabled`: Enables fake player addition to playercount.
  - `amount`: Number of fake players to add.
  - `mode`: The method for calculating fake players (e.g., `DIVISION`, `RANDOM`, `STATIC`).

---

## TCP Fast Open
- `tcp-fast-open`: Enables faster TCP connections using the specified mode.

---

## AntiBot
Mitigates bot attacks with various measures.

### Latency
- `enabled`: Detects high-latency connections.
- `firewall`: Firewalls players that fail this check.
- `limit`: Latency limit in milliseconds.
- `log`: Logs detected high-latency connections.

### Accounts
- `enabled`: Limits connections per account.
- `firewall`: Firewalls players that fail this check.
- `limit`: Max connections per account.
- `whitelist`: List of exempted accounts.

### Country
- `enabled`: Restricts connections by country.
- `firewall`: Firewalls players that fail this check.
- `blacklist`: List of blocked country codes.
- `whitelist`: List of allowed country codes.

### FastChat
- `enabled`: Blocks spammy chat messages.
- `firewall`: Firewalls players that fail this check.
- `time`: Minimum time between messages (ms).
- `repetition`: Limits repetitive messages.
  - `threshold`: Max repetitions allowed.
  - `length`: Minimum message length to count as repetitive.

### Firewall
- `enabled`: Activates the firewall.
- `exceptions`: List of exceptions to block for.
- `ipset`: Uses IP set for better performance. (Requires Linux w/Root)
- `whitelist`: List of ips that cannot be firewalled.

### Nickname
- `enabled`: Blocks bot-like nicknames from joining.
- `firewall`: Firewalls players that fail this check.
- `blacklist`: List of names that are blacklisted.
- `log`: Log detected nicknames in the console.

### Password
- `enabled`: Blocks bots with similar passwords.
- `firewall`: Firewalls players that fail this check.
- `limit`: Maximum amount of accounts that can use the same password.
- `login-commands`: Place here the commands used to login the server.
- `log`: Log when a player enters a repeated password

### RateLimit
- `enabled`: Blocks connections/pings per second per IP.
- `firewall`: Firewalls players that fail this check.
- `connections-per-second`: Maximum connections per seconds per IP.
- `pings-per-second`: Maximum pings per second per IP.
- `log`: Log fast connections in the console.

### Reconnect
Asks new players to reconnect the server before really being able to join. This prevent multiple advanced bot attacks and you must not disable unless you know what you are doing.

- `enabled`: Asks new players to reconnect before playing.
- `attempts`: Amount of times player has to reconnect.
- `ping-attempts`: Amount of pings player has to send to join.
- `max-time`: Max time since last ping/connect to count as valid.
- `min-time`: Minimum time to count as valid so to block too fast connections.s
- `log`: Log players who fail the check in the console.
- `connections-trigger`: Amount of connections per second to start checking.
- `seconds-active`: Seconds the check will be active after trigger.
- `geyser-bypass`: Wether to bypass players using geyser.
- `whitelist`: Whitelist players that pass this check.

### Proxy Check  
The Proxy Check feature validates incoming connection IPs against a list of known proxy, VPN, and malicious IP addresses. It blocks connections from IPs present in the specified lists or detected online as proxies.  

- `enabled`: Activates the Proxy Check feature.  
- `log`: Logs blocked connections to the console.  
- `firewall`: Blocks detected proxy IPs at the firewall level using the `ipset` command on Linux (if `ipset` is enabled).  
- `online-check`: Enables online verification of IPs for proxy detection using external services.  
- `email`: Required for online proxy detection services.  
- `whitelist`: Exempts specified IPs from Proxy Check, ensuring they are not blocked.  
- `lists`: A list of URLs containing known proxy, VPN, or malicious IPs to be checked against.  

### Limbo Check
The Limbo feature redirects suspicious connections to an isolated environment for additional verification, such as movement and CAPTCHA challenges.

- `enabled`: Activates Limbo checks for new connections.
- `log`: Logs to the console when a player is blocked for failing Limbo verification.
- `whitelist`: Prevents whitelisted players from being rechecked after passing Limbo.
- `dimension`: Specifies the dimension for the Limbo environment:  
  - `0`: Overworld  
  - `1`: Nether  
  - `2`: End  
- `trigger`: Conditions that activate Limbo based on connection spikes:  
  - `connections`: Number of connections within the defined period to trigger Limbo.  
  - `period`: Timeframe (in seconds) to evaluate connection counts.  
  - `seconds-active`: Duration (in seconds) that Limbo remains active after triggering.  
- `captcha-count`: Pre-generates a set number of CAPTCHA challenges to reduce CPU usage.  
- `timeout`: Maximum time (in seconds) allowed for players to complete the CAPTCHA.

### Packets Check  
The Packets Check feature monitors and limits incoming player packets to prevent server overload or abuse from excessive packet sending.  

- `enabled`: Activates the Packets Check system.  
- `firewall`: Firewalls players from reconnecting to the server after failing the packet check.  
- `log`: Logs detected violations to the console for monitoring purposes.  
- `debug`: Provides detailed information on packet checks, useful for identifying and resolving false positives.  
- `vls-per-byte`: Sets the violation level (VLS) to be added for each byte received in a packet.  
- `vls-per-packet`: Sets the violation level (VLS) to be added for each packet received from a player.  
- `vls-to-kick`: Defines the VLS threshold at which a player is kicked from the server.  
- `cancel_vls`: (Non-configurable) Automatically cancels further packet processing when a player reaches 25 VLS.  

---

## Maintenance Mode
Allows setting the server to maintenance mode.

- `enabled`: Activates maintenance mode.
- `protocol`: Displays a custom protocol message.
- `motd`: Custom MOTD for maintenance.
- `kick`: Custom kick message for players attempting to join.
- `whitelist`: List of players allowed to join during maintenance.

---

## Balancer  
The Balancer feature distributes player connections evenly across multiple servers, ensuring optimal load distribution and a seamless experience.  

- `enabled`: Activates the Balancer functionality.  
- `on-join`: Balances players automatically upon joining the network, distributing them evenly across available lobbies.  
- `fallback`: Redirects players to a designated lobby or balanced server when their current server becomes unavailable.  
- `lobby-command`: Enables the `/lobby` command, allowing players to switch lobbies manually while balancing the load.  
- `command-blacklist`: Specifies a list of servers where the `/lobby` command is disabled to prevent misuse or conflicts.  
- `fallback`: If a Spigot server goes offline, and `fallback` is enabled, players are redirected to a balanced lobby instead of being disconnected.  
- `command-blacklist`: The `command-blacklist` setting defines servers where the `/lobby` command cannot be used, ensuring restricted functionality in sensitive areas like authentication servers.  
- `servers`: The `servers` list specifies which servers are part of the Balancer pool for load distribution. 

---

## Other Features

- `chained-proxy-support`: Handles chained proxies if enabled.
- `allow-invalid-names`: Allows invalid player names if `true`.
- `compression-level`: Adjusts packet compression (0–9).
- `large-payloads`: If `false`, disables support for oversized payloads.
