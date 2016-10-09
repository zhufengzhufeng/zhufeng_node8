## 配置
- 的git邮箱和账号
```
git config --global user.name '用户名'
git config --global user.email '邮箱'
```
- 查看配置
git config --list
##  创建目录
```
mkdir 目录的名字
```
## 改变目录
```
cd ..
```
# locals
##  git init 
初始化本地仓库，表示当前文件夹归git所管理

## echo可以输入内容并且创建文件 
```
echo hello > index.txt
```

## 查看文件的内容
```
cat 文件名
```
## 编辑
```
vi index.txt
```

> 先按i键 进入insert模式 更改后按esc， :wq退出

## 追加内容
```
echo world >> index.txt
```
> 一个大于号表示清空并写入，两个大于号表示追加内容

## 将内容追加到暂存区中
```
git add .   /git add -A / git add 文件名
```

## 提交到历史区中
```
git commit 
```

## 查看版本库日志
```
git log --oneline
```
## 比较不同
- 默认比较的是工作区和暂存区的不同
```
git diff 
```
- 工作区和版本库
```
git diff master
```
- 暂存区和版本库
```
git diff --cached
``` 
## 不能用于某个文件的首次提交
```
git add 
git commit -m
git commit -a -m 'write second'
```

## 拉回本次的add内容
```
git reset HEAD index.txt
```
## 将暂存区的内容覆盖掉工作区
```
git checkout index.txt
```
> 暂存区中没有会从历史区拉回来

## 回滚
- 用历史区覆盖掉工作区
```
git reset --hard 版本号
```
## 查看历史版本
```
git reflog
```

## 回滚指定回滚几个版本
```
git reset --hard HEAD^/HEAD~1
```


## 分支
- 创建分支
```
git branch 分支的名字
```
- 切换分支
```
git checkout dev
```
- 查看所有分支
```
git branch
```
- 删除分支
``` 
git branch -d dev 
```
## 既创建分支还要进入到分支中
```
git branch dev
git checkout dev
git checkout -b dev 
```

> git checkout -b gh-pages 一步到位

## 在分支上进行开发
- 开发后切换到主分支上合并本次的开发
```
git merge dev
```
> 在主干上合并就要切换到主分支上

## 解决冲突
将<<<<<   ====== >>>>> 删除保留想要的再次add commit 生成合并后的版本
## 创建文件
```
touch dev.js
```
- 显示图表并显示分支
```
git log --graph --decorate
```


```
git branch 
git checkout 
git merge 
git branch -d
```


## 如果正在开发时 切换分支 要保证工作区和暂存区都为干净的否则不让切换

## 保存到历史
- 用历史区覆盖暂存区和工作区
```
git stash
```

## 查看保存的内容
```
git stash list
```
## 应用历史并且删除历史
```
git stash apply 
git stash drop
=
git stash pop
```
## rebase 变基 
- rebase和merge的区别 
- 更改了合并的线 
- 不会产生新的提交，在当此提交上演绎分支上的提交，最终合并成了一个提交
```
git rebase dev
```
## cherry-pick 挑选精选
```
git cherry-pick 当前分支的版本号
```

## origin
- 添加本地仓库和远程仓库的关联
```
git remote add origin https://github.com/zhufengzhufeng/zhufeng_homeworks8.git
```

## 查看远程仓库地址
```
git remote -v
```
## 删除关联
```
git remote rm origin
```
## 推送到远程仓库上
- upstream
```
git push -u origin master
```
> 第一次如果使用了-u参数 下次提交直接可以可以使用git push


## 在正常提交之前要使用忽略文件忽略掉不想提交的
```
touch .gitignore
```

## 推送到远程仓库
- 基本的提交
```
touch .gitignore
git add .
git commit -m 'ok'
git remote add origin 地址
git push origin master -u
```

## 将远程仓库的内容拉去到本地
- 拉去最新代码
```
git pull
```

## 讲师


## 组长
- fork讲师的仓库
    - 将当前老师仓库的状态克隆一份放在自己的仓库下（老师代码更改后不会影响你的代码）
    - fork代码只能fork一次
- 组长克隆自己的文件
```
git clone 地址 文件夹的名字
```
- 建立组员信息提交到自己的仓库上

> 空文件夹无法提交到github上

## 组员
- 组员和组长是共用一个仓库的
- 添加贡献者
- 组员将组长的仓库下载到本地写自己的作业
- 组长和组员是同一个仓库组员可以操作组长的仓库
- 组员新建自己的文件夹将自己的作业放入
```
git add .
git commit -m 'xxx作业ok了'
git pull origin master 防止将别人的代码覆盖掉
git push origin master
```
- 每次写代码之前 要先git pull拉去最新代码

> 尽量不要更改其他人的
