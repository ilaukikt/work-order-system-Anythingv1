# Build System Fix

## Issue

The build system was failing with error:
```
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/project/package.json'
```

## Root Cause

The Claude Code environment's build system expects the project to be at `/home/project`, but our actual project is located at `/tmp/cc-agent/59379653/project/apps/web`.

## Solution

Created a symbolic link from `/home/project` to the actual project directory:

```bash
ln -s /tmp/cc-agent/59379653/project/apps/web /home/project
```

This allows the build system to find the project at its expected location while keeping our actual files in their original location.

## Implementation

Updated `check-health.sh` to automatically create this symlink if it doesn't exist:

```bash
# Ensure /home/project symlink exists (required for build system)
if [ ! -L "/home/project" ]; then
    echo "🔗 Creating symlink /home/project -> $PROJECT_DIR"
    ln -sf "$PROJECT_DIR" /home/project
fi
```

## Verification

All systems now working correctly:

✅ **Build:** `npm run build` succeeds
✅ **Server:** Running on port 4000
✅ **APIs:** All endpoints responding correctly
✅ **Symlink:** Automatically maintained by health check

## Commands

From now on, you can work from either location:

```bash
# Both of these work identically:
cd /tmp/cc-agent/59379653/project/apps/web
cd /home/project

# All commands work from either location:
npm run build
npm run dev
bash check-health.sh
```

The symlink ensures both paths point to the same files, so changes in one location are immediately reflected in the other.
