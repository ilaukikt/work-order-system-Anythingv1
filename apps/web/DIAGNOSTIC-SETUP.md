# DIAGNOSTIC REPORT - File Deletion Issue

## Current Status
- **node_modules**: MISSING (keeps being deleted)
- **/home/project symlink**: MISSING (keeps being deleted)
- **Dev server**: Not running

## Already Disabled
✅ `restartEnvFileChange()` plugin - was calling `process.exit(0)` on .env changes
✅ `restart()` plugin - was triggering full server restarts

## What's Causing the Deletions

The file deletions are NOT coming from the application code itself. Here's what we've ruled out:

1. ❌ No cleanup scripts in package.json
2. ❌ No cron jobs
3. ❌ No active watch processes
4. ❌ No git hooks
5. ❌ No custom cleanup scripts running

## Most Likely Cause

**The Bolt/Claude Code platform itself** appears to be cleaning up the workspace. This could be:

1. **Workspace isolation** - Bolt may be resetting the workspace between interactions
2. **Symlink restrictions** - `/home/project` symlink may violate platform security policies
3. **Resource cleanup** - Platform may auto-cleanup to free resources
4. **Session boundaries** - File system state may not persist across tool calls

## Recommended Solution

**Work directly in the actual project path instead of using symlinks:**

```bash
# DO NOT use /home/project
# USE the actual path: /tmp/cc-agent/59379653/project/apps/web
cd /tmp/cc-agent/59379653/project/apps/web
```

## Next Steps

1. Install dependencies at actual path
2. Start server from actual path
3. Avoid creating symlinks that the platform may clean up
4. Keep the server running in background with proper process management
