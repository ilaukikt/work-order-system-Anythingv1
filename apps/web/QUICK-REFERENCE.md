# Quick Reference Guide

## Essential Commands

### Check Server Status
```bash
bash check-server.sh
```
Shows if server is running and all APIs are working.

### Start Server
```bash
bash start-server.sh
```
Checks dependencies and starts the development server.

### Check Dependencies
```bash
bash check-health.sh
```
Verifies node_modules is intact, reinstalls if needed.

### View Server Logs
```bash
tail -f /tmp/server.log
```
Live view of server output.

## Common Issues & Solutions

### Issue: "sh: 1: react-router: not found"
**Solution:**
```bash
bash check-health.sh  # Reinstalls dependencies
bash start-server.sh  # Starts server
```

### Issue: Server stopped unexpectedly
**Solution:**
```bash
bash check-server.sh  # Check status
bash start-server.sh  # Restart if needed
```

### Issue: Changes not appearing
**Solution:**
- Most changes hot-reload automatically (no restart needed)
- Check browser console for errors
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Build fails
**Solution:**
```bash
npm run build
# Check error messages
# Most common: missing dependencies
bash check-health.sh
npm run build
```

## API Endpoints

All APIs return JSON with `success: true/false`

### Companies
- **GET** `/api/companies` - List all companies
- **POST** `/api/companies` - Create company
- **GET** `/api/companies/:id` - Get company
- **PUT** `/api/companies/:id` - Update company
- **DELETE** `/api/companies/:id` - Delete company

### Vendors
- **GET** `/api/vendors` - List all vendors
- **POST** `/api/vendors` - Create vendor
- **GET** `/api/vendors/:id` - Get vendor
- **PUT** `/api/vendors/:id` - Update vendor
- **DELETE** `/api/vendors/:id` - Delete vendor

### Work Orders
- **GET** `/api/work-orders` - List all work orders
- **POST** `/api/work-orders` - Create work order
- **GET** `/api/work-orders/:id` - Get work order
- **PUT** `/api/work-orders/:id` - Update work order
- **DELETE** `/api/work-orders/:id` - Delete work order

### Activity Logs
- **GET** `/api/activity-logs` - List activity logs
- **POST** `/api/activity-logs` - Create log entry

## Test Commands

### Test Single API
```bash
curl http://localhost:4000/api/companies
```

### Test All APIs
```bash
curl http://localhost:4000/api/companies && \
curl http://localhost:4000/api/vendors && \
curl http://localhost:4000/api/work-orders
```

### Test Dashboard
```bash
curl http://localhost:4000/dashboard | grep "Dashboard"
```

## File Structure

```
apps/web/
├── check-health.sh        # Dependency checker
├── start-server.sh        # Server starter
├── check-server.sh        # Status checker
├── src/
│   ├── app/
│   │   ├── root.tsx       # Root component
│   │   ├── layout.jsx     # Main layout
│   │   ├── page.jsx       # Home (redirects to dashboard)
│   │   ├── dashboard/     # Dashboard page
│   │   ├── companies/     # Companies page
│   │   ├── vendors/       # Vendors page
│   │   └── work-orders/   # Work orders pages
│   └── api/
│       ├── companies/     # Companies API
│       ├── vendors/       # Vendors API
│       ├── work-orders/   # Work orders API
│       ├── activity-logs/ # Activity logs API
│       └── utils/
│           └── supabase.js # Supabase client
└── vite.config.ts         # Vite configuration

```

## Environment Variables

Located in `/tmp/cc-agent/59379653/project/apps/web/.env`:

```bash
VITE_SUPABASE_URL=https://dboqykyyyuoyekzdhxlm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
```

## Server Configuration

- **Port:** 4000
- **Host:** 0.0.0.0 (accessible from all interfaces)
- **Hot Reload:** Enabled for most files
- **Server Restart:** Only for critical infrastructure changes

## Need Help?

1. **Check server status:** `bash check-server.sh`
2. **View logs:** `tail -f /tmp/server.log`
3. **Read stability guide:** `cat SERVER-STABILITY.md`
