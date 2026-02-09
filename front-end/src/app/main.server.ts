import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app'; // Added .component
import { config } from './app.config.server';   // Ensure this file exists in /app

const bootstrap = (options: any) => 
  bootstrapApplication(AppComponent, {
    ...config,
    ...options
  });

export default bootstrap;