#!/bin/bash

# Deployment script for Vercel
echo "🚀 Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to Vercel
echo "🌍 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed!"
echo "📝 Your site should now be live at: https://www.ajnetpro.ca"
echo ""
echo "🔍 Next steps:"
echo "1. Set up your custom domain in Vercel dashboard"
echo "2. Configure environment variables in Vercel"
echo "3. Set up Google Search Console for SEO monitoring"
echo "4. Submit your sitemap to Google Search Console"