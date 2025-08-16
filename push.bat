@echo off
echo Starting git operations...
git config core.pager ""
echo Configured git pager
git add -A
echo Added files to staging
git commit -m "fix: clean up repository and resolve deployment issues"
echo Committed changes
git push origin seo-split
echo Push completed!
echo Success!

