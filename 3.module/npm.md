## 创建管理依赖文件package.json
```
npm init -y
```

## 开发依赖（只在开发时使用） gulp
- 使用gulp,会自动帮你在package.json中写入这个依赖
```
npm install gulp --save-dev
```
## 依赖（上线和开发时都需要） jquery  angular
```
npm install jquery angular --save
```
> 文件会安装在node_modules下
## 可以安装所有依赖
```
npm install 
```
## 卸载包
- 会将所有关于gulp的内容卸载 ，并在列表中移除掉
```
npm uninstall gulp --save-dev 
npm uninstall angular --save
```
## 全局安装 -g
- 不会增加到列表里，并且只是在命令行下使用
```
npm i -g gulp
npm uninstall  -g  gulp
```

> 在npm上做了一个映射 npm在path中所有映射的这个快捷命令可以直接在命令行下使用

<!--
C:\Users\10354_000\AppData\Roaming\npm\gulp -> C:\Users\10354_000\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js
C:\Users\10354_000\AppData\Roaming\npm-->
## 发布包
- 登陆/创建账号
```
npm adduser
```
- 发布
```
npm publish
```
- 取消发布
```
npm unpulish --f jiangwpacks
```


## 安装切换源
```
npm install nrm -g
```
## 查看所有源
```
nrm ls
```
## 使用源
```
nrm use npm
```
> 发布包的时候需要切换到npm上

## 模块的分类
- ./文件模块
- 没有./的是第三方模块或者核心模块 