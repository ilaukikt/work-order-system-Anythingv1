#!/bin/bash
# Health check script to ensure server dependencies are intact

set -e

PROJECT_DIR="/tmp/cc-agent/59379653/project/apps/web"
cd "$PROJECT_DIR"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules directory is missing!"
    echo "📦 Reinstalling dependencies..."
    npm install --legacy-peer-deps
    exit 0
fi

# Check if critical packages exist
if [ ! -d "node_modules/@react-router" ]; then
    echo "❌ Critical package @react-router is missing!"
    echo "📦 Reinstalling dependencies..."
    npm install --legacy-peer-deps
    exit 0
fi

echo "✅ All dependencies are healthy"
exit 0
