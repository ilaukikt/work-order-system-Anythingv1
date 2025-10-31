# Server Stability Guide

## Issue: Server Stops and node_modules Disappears

### Root Cause Analysis

The server was experiencing instability due to:

1. **Aggressive Restart Plugin**: The Vite `restart` plugin was watching ALL `page.jsx`, `layout.jsx`, and `route.js` files with wildcard patterns (`src/**/page.jsx`). This caused the server to restart on EVERY file save, which:
   - Interrupted ongoing npm operations
   - Caused race conditions with file watchers
   - Potentially corrupted the node_modules directory

2. **Short Restart Delay**: The default 500ms delay was too short, causing rapid restarts before the previous restart completed

3. **Temporary Directory**: The `/tmp` directory can be cleaned up by system processes

## Solutions Implemented

### 1. Reduced Restart Triggers

**Before:**
```typescript
restart({
  restart: [
    'src/**/page.jsx',     // ALL page files
    'src/**/page.tsx',
    'src/**/layout.jsx',   // ALL layout files
    'src/**/layout.tsx',
    'src/**/route.js',     // ALL API routes
    'src/**/route.ts',
  ],
})
```

**After:**
```typescript
restart({
  delay: 2000,           // Increased delay to 2 seconds
  restart: [
    'src/app/layout.jsx',      // Only root layout
    'src/app/layout.tsx',
    'src/app/root.tsx',        // Only root component
    'react-router.config.ts',  // Only config files
    'vite.config.ts',
  ],
})
```

**Benefits:**
- Server only restarts for critical infrastructure changes
- Page and API route changes use hot module replacement (HMR) instead of full restart
- 2-second delay prevents restart storms

### 2. Health Check Script

Created `check-health.sh` to verify dependencies before starting:

```bash
#!/bin/bash
# Verifies node_modules integrity
# Reinstalls if missing or corrupted
```

**Usage:**
```bash
bash check-health.sh
```

### 3. Robust Start Script

Created `start-server.sh` that:
- Checks dependencies first
- Only starts server if healthy
- Provides clear error messages

**Usage:**
```bash
bash start-server.sh
```

## Best Practices

### Starting the Server

**Recommended:**
```bash
cd /tmp/cc-agent/59379653/project/apps/web
bash start-server.sh
```

**Manual (if needed):**
```bash
bash check-health.sh  # Check dependencies first
npm run dev           # Then start
```

### If Server Stops or node_modules Disappears

1. Run health check:
```bash
bash check-health.sh
```

2. If dependencies are missing, they'll be reinstalled automatically

3. Start server:
```bash
bash start-server.sh
```

### Development Tips

1. **Most file changes don't require restart**: Thanks to HMR, changes to:
   - React components
   - API routes
   - Page files
   - Styles

   All hot-reload without restarting the server.

2. **Only these changes require restart**:
   - Root layout changes
   - Root component changes
   - Config file changes (vite.config.ts, react-router.config.ts)

3. **Monitor server logs**:
```bash
tail -f /tmp/server.log
```

## Verification

Test that everything works:

```bash
# 1. Check dependencies
bash check-health.sh
# Should output: ✅ All dependencies are healthy

# 2. Start server
bash start-server.sh

# 3. Test API (in another terminal)
curl http://localhost:4000/api/companies
# Should output: {"success":true,"companies":[]}

# 4. Test dashboard
curl http://localhost:4000/dashboard | grep "Dashboard"
# Should output: Dashboard
```

## Technical Details

### Why node_modules Disappeared

The combination of:
- Rapid server restarts (every file save)
- File system operations on `/tmp`
- Possible npm cache corruption
- Race conditions between npm and file watchers

Led to the node_modules directory becoming corrupted or deleted.

### Why This Fix Works

1. **Fewer Restarts**: Only critical infrastructure files trigger restarts
2. **Longer Delay**: 2-second delay prevents restart storms
3. **HMR First**: All non-critical changes use hot module replacement
4. **Health Checks**: Automatic detection and recovery from missing dependencies

## Monitoring

Watch for these signs of issues:

- Server stops unexpectedly
- `node_modules` directory missing
- Error: `sh: 1: react-router: not found`
- Build failures with module not found errors

If you see these, run:
```bash
bash check-health.sh && bash start-server.sh
```
