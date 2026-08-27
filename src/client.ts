import { Client, GatewayIntentBits, type ClientOptions } from "discord.js"           // CLIENTS
import { Collection } from "discord.js"           
import fs from 'node:fs';
import path from 'node:path'

export class SpotifyManagerClient extends Client {
  public commands: Collection<string, any> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  async getAllRoutes() {
    // load all routes under routes/ dir.
    const allRoutes = path.join(import.meta.dirname, "routes");
    // only typescript files.
    const allRouteFiles = fs.readdirSync(allRoutes).filter(file => file.endsWith('.ts'));
  
    for (const route of allRouteFiles) {
      // Get Route Path
      const routePath = path.join(allRoutes, route);
      // Get Route Event Listener (typescript body)
      const routeFile = await import(routePath);
      
      // READ COMMAND DATA (data) AND EXECUTE 
      if ('data' in routeFile && 'execute' in routeFile) {
        this.commands.set(routeFile.data.name, routeFile);
      }
    }
  }
  
}
