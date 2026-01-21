#!/usr/bin/env node

/**
 * Simple deployment script for iPermit Pro
 * This script helps with GitHub upload and deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 iPermit Pro Deployment Helper\n');

// Check if we're in a git repository
try {
  execSync('git status', { stdio: 'ignore' });
  console.log('✅ Git repository detected');
} catch (error) {
  console.log('❌ Not a git repository. Run: git init');
  process.exit(1);
}

// Check if remote origin exists
try {
  const remote = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
  console.log(`✅ Remote origin: ${remote}`);
} catch (error) {
  console.log('❌ No remote origin set. Run: git remote add origin <your-repo-url>');
  process.exit(1);
}

// Check for uncommitted changes
try {
  execSync('git diff --exit-code', { stdio: 'ignore' });
  execSync('git diff --cached --exit-code', { stdio: 'ignore' });
  console.log('✅ No uncommitted changes');
} catch (error) {
  console.log('📝 Uncommitted changes detected. Committing...');
  try {
    execSync('git add .');
    execSync('git commit -m "Update: Latest changes to iPermit Pro"');
    console.log('✅ Changes committed');
  } catch (commitError) {
    console.log('❌ Failed to commit changes');
    process.exit(1);
  }
}

// Try to push
console.log('\n🔄 Attempting to push to GitHub...');
try {
  execSync('git push -u origin main', { stdio: 'inherit' });
  console.log('\n🎉 Successfully uploaded to GitHub!');
  console.log('\n📋 Next Steps:');
  console.log('1. Visit your GitHub repository');
  console.log('2. Check that all files are uploaded');
  console.log('3. Consider deploying to Vercel or Netlify');
} catch (error) {
  console.log('\n❌ Push failed. This is likely due to authentication.');
  console.log('\n🔐 Authentication Options:');
  console.log('1. Use Personal Access Token:');
  console.log('   git remote set-url origin https://USERNAME:TOKEN@github.com/Al-Cohol/form.git');
  console.log('2. Use SSH key (if configured):');
  console.log('   git remote set-url origin git@github.com:Al-Cohol/form.git');
  console.log('3. Use GitHub Desktop application');
  console.log('\nSee GITHUB_UPLOAD_INSTRUCTIONS.md for detailed steps.');
}

console.log('\n📊 Repository Stats:');
try {
  const stats = execSync('git log --oneline | wc -l', { encoding: 'utf8' }).trim();
  console.log(`Commits: ${stats}`);
  
  const files = execSync('git ls-files | wc -l', { encoding: 'utf8' }).trim();
  console.log(`Files: ${files}`);
  
  const lines = execSync('git ls-files | xargs wc -l | tail -1', { encoding: 'utf8' }).trim();
  console.log(`Total lines: ${lines}`);
} catch (error) {
  console.log('Could not get repository stats');
}