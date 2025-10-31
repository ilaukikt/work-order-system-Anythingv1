#!/bin/bash
# Robust server start script with dependency checking

set -e

PROJECT_DIR="/tmp/cc-agent/59379653/project/apps/web"
cd "$PROJECT_DIR"

echo "🔍 Checking dependencies..."
bash check-health.sh

echo "🚀 Starting development server..."
npm run dev
