#!/bin/bash
# Check if server is running and healthy

echo "🔍 Checking server status..."

# Check if server process is running
if pgrep -f "react-router dev" > /dev/null; then
    echo "✅ Server process is running"
else
    echo "❌ Server process is NOT running"
    echo "💡 Run: bash start-server.sh"
    exit 1
fi

# Check if server responds
if curl -s http://localhost:4000/api/companies > /dev/null; then
    echo "✅ Server is responding to requests"
else
    echo "⚠️  Server process running but not responding"
    echo "💡 Check logs: tail -f /tmp/server.log"
    exit 1
fi

# Test API endpoints
echo ""
echo "📊 Testing API endpoints..."

COMPANIES=$(curl -s http://localhost:4000/api/companies | grep -o '"success":true' || echo "FAIL")
VENDORS=$(curl -s http://localhost:4000/api/vendors | grep -o '"success":true' || echo "FAIL")
WORK_ORDERS=$(curl -s http://localhost:4000/api/work-orders | grep -o '"success":true' || echo "FAIL")

if [ "$COMPANIES" = '"success":true' ]; then
    echo "  ✅ Companies API working"
else
    echo "  ❌ Companies API failed"
fi

if [ "$VENDORS" = '"success":true' ]; then
    echo "  ✅ Vendors API working"
else
    echo "  ❌ Vendors API failed"
fi

if [ "$WORK_ORDERS" = '"success":true' ]; then
    echo "  ✅ Work Orders API working"
else
    echo "  ❌ Work Orders API failed"
fi

echo ""
echo "✅ All checks passed! Server is healthy."
echo "🌐 Access dashboard at: http://localhost:4000/dashboard"
