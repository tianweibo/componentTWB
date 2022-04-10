git init 
git remote add origin https://github.com/tianweibo/componentTWB.git
git remote -v
git add .
git commit -m 
git push --set-upstream origin master



插曲
生成token=》 个人中心 -> settings -> Developer settings -> personal access tokens -> Generate new token
git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git

<your_token>：换成你自己得到的token
<USERNAME>：是你自己github的用户名
<REPO>：是你的仓库名称
git remote set-url origin https://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@github.com/tianweibo/componentTWB
