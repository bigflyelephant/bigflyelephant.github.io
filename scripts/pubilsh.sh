yarn build

cd ./dist

git init
git remote add origin git@github.com:bigflyelephant/bigflyelephant.github.io.git
git checkout gh-pages
git add .
git commit -m "feat: 发版"
git push -f
