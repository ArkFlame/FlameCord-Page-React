import { Flex, Heading } from '@chakra-ui/react';

export default function Config() {
  return (
    <Flex width={'100%'} justifyContent={'center'}>
      <Flex
        flexDir={'column'}
        gap={'40px'}
        width={'100%'}
        maxWidth={'600px'}
        alignItems={'center'}
        padding={'30px 0'}
      >
        <Heading>FlameCord Config</Heading>
        <section id="configuration-guide" className="guide-section">
          <h1>FlameCord Configuration Guide</h1>
          <p>
            Learn how to configure FlameCord to enhance your server&apos;s security
            and performance.
          </p>
        </section>

        <section id="logger" className="config-section">
          <h2 className="section-title">Logger Configuration</h2>
          <p className="section-description">
            Configure logging options for FlameCord.
          </p>

          <div className="config-subsection">
            <h3>Initial Handler</h3>
            <p>Controls the initial handling of logging.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Exceptions</h3>
            <p>Determines whether exceptions are logged.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Dump</h3>
            <p>Controls the dumping of logs.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>HAProxy</h3>
            <p>Configures HAProxy logging.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Detailed Connect Errors</h3>
            <p>Enables detailed logging of connection errors.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
            </ul>
          </div>
        </section>

        <section id="custom-motd" className="config-section">
          <h2 className="section-title">Custom MOTD Configuration</h2>
          <p className="section-description">
            Customize the Message of the Day (MOTD) settings for FlameCord.
          </p>

          <div className="config-subsection">
            <h3>MOTD</h3>
            <p>Customize the MOTD using colors and HEX codes.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
              <li>
                <strong>MOTDs:</strong>
                <ul>
                  <li>
                    &eDefault &cFlameCord&e server
                    &7(%onlineplayers%/%maxplayers%)
                  </li>
                  <li>&eEdit on &cflamecord.yml&7 (IridiumColorAPI HEX)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Sample MOTD</h3>
            <p>
              Define sample MOTDs that show when hovering with the mouse over
              the player count.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
              <li>
                <strong>Samples:</strong>
                <ul>
                  <li>
                    &eDefault &cFlameCord&e server
                    &7(%onlineplayers%/%maxplayers%)
                  </li>
                  <li>&eEdit on &cflamecord.yml&7 (IridiumColorAPI HEX)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Protocol</h3>
            <p>Customize the server protocol message.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
              <li>
                <strong>Name:</strong> <code>&c&lMaintenance</code>
              </li>
              <li>
                <strong>Always Show:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Max Players</h3>
            <p>
              Configure the maximum number of players displayed in the ping
              response.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
              <li>
                <strong>Amount:</strong> <code>1000</code>
              </li>
              <li>
                <strong>Just One More:</strong> <code>false</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Fake Players</h3>
            <p>Adjust settings for fake player counts.</p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>false</code>
              </li>
              <li>
                <strong>Amount:</strong> <code>3</code>
              </li>
              <li>
                <strong>Mode:</strong> <code>DIVISION</code>
              </li>
            </ul>
          </div>
        </section>

        <section id="tcp-fast-open" className="config-section">
          <h2 className="section-title">TCP Fast Open Configuration</h2>
          <p className="section-description">
            Adjust TCP Fast Open settings in the Netty system.
          </p>

          <div className="config-subsection">
            <h3>TCP Fast Open</h3>
            <p>Adjust the value of TCP Fast Open in the Netty system.</p>
            <ul className="config-options">
              <li>
                <strong>Value:</strong> <code>3</code>
              </li>
            </ul>
          </div>
        </section>

        <section id="compression-level" className="config-section">
          <h2 className="section-title">Compression Level Configuration</h2>
          <p className="section-description">
            Control packet compression for optimal performance.
          </p>

          <div className="config-subsection">
            <h3>Compression Level</h3>
            <p>
              Set the compression level for packets (1-9). Higher levels provide
              more compression but may increase CPU usage.
            </p>
            <ul className="config-options">
              <li>
                <strong>Level:</strong> <code>6</code>
              </li>
            </ul>
          </div>
        </section>

        <section id="antibot" className="config-section">
          <h2 className="section-title">AntiBot Configuration</h2>
          <p className="section-description">
            Enhance security with FlameCord&apos;s AntiBot features.
          </p>

          <div className="config-subsection">
            <h3>Accounts Check</h3>
            <p>
              Control the registration of accounts per IP to prevent spam
              account creation.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Limit:</strong> <code>3</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Whitelist:</strong> <code>Nickname</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Country Check</h3>
            <p>
              Block or allow connections from specific countries to enhance
              security.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Blacklist:</strong>{' '}
                <code>CN, HK, RU, IN, TH, ID, DZ, VN, IR, PK</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Whitelist:</strong> <code></code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>FastChat Check</h3>
            <p>
              Prevent bots from automatically sending commands upon joining the
              server.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Time:</strong> <code>1000</code> milliseconds
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Firewall Check</h3>
            <p>
              Manage dropped connections based on certain criteria and
              exceptions.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Exceptions:</strong>{' '}
                <code>
                  BadPacketException, QuietException, IllegalStateConfig,
                  FastException
                </code>
              </li>
              <li>
                <strong>Time:</strong> <code>60</code> seconds
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Whitelist:</strong> <code>127.0.0.1</code>
              </li>
              <li>
                <strong>IPSet:</strong> <code>true</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Nickname Check</h3>
            <p>
              Block specific nicknames often used by bots to infiltrate servers.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Blacklist:</strong>{' '}
                <code>
                  mcstorm, mcdown, mcbot, theresa_bot, dropbot, kingbot
                </code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Password Check</h3>
            <p>
              Prevent bots from using the same passwords by limiting their
              usage.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Limit:</strong> <code>3</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>RateLimit Check</h3>
            <p>
              Control the number of connections and pings per second to prevent
              spamming.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Firewall:</strong> <code>true</code>
              </li>
              <li>
                <strong>Connections Per Second:</strong> <code>3</code>
              </li>
              <li>
                <strong>Pings Per Second:</strong> <code>8</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Whitelist:</strong> <code>127.0.0.1</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Reconnect Check</h3>
            <p>
              Manage player reconnect attempts and timing for effective bot
              deterrence.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Attempts:</strong> <code>2</code>
              </li>
              <li>
                <strong>Pings:</strong> <code>1</code>
              </li>
              <li>
                <strong>Max Time:</strong> <code>10000</code> milliseconds
              </li>
              <li>
                <strong>Connection Threshold:</strong> <code>1</code>
              </li>
              <li>
                <strong>Connection Threshold Limit:</strong> <code>8000</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Packets Check</h3>
            <p>
              Monitor and control the use of packets to prevent misuse by bots
              and accounts.
            </p>
            <p>
              If you are encountering issues with packets, try <b>slightly</b>{' '}
              reducing VLS Per Byte or VLS Per Packet.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Debug:</strong> <code>false</code>
              </li>
              <li>
                <strong>VLS Per Byte:</strong> <code>0.0017</code>
              </li>
              <li>
                <strong>VLS Per Packet:</strong> <code>0.1</code>
              </li>
              <li>
                <strong>VLS To Kick:</strong> <code>100.0</code>
              </li>
            </ul>
          </div>

          <div className="config-subsection">
            <h3>Lockdown Mode</h3>
            <p>
              Configure the settings for FlameCord&apos;s Lockdown Mode to enhance
              your server&apos;s security.
            </p>
            <ul className="config-options">
              <li>
                <strong>Enabled:</strong> <code>true</code>
              </li>
              <li>
                <strong>Log:</strong> <code>true</code>
              </li>
              <li>
                <strong>Duration:</strong> <code>5000</code> milliseconds
              </li>
              <li>
                <strong>Period:</strong> <code>5000</code> milliseconds
              </li>
              <li>
                <strong>Period Limit:</strong> <code>2</code>
              </li>
            </ul>
          </div>
        </section>
      </Flex>
    </Flex>
  );
}
