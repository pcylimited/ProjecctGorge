// Catch module-loading failures before main.js can install its boot handler.
import('./main.js').catch((error) => {
  console.error('Application module failed to load:', error);
  document.getElementById('load-text').textContent =
    'Could not load the app. Reload this page; if it persists, restart npm run dev -- --force.';
});
