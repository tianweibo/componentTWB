github Action持续集成=》自动化打包发布工具：我们只需简单的配置就可以轻松的在执行打标签或者push啥的时候自动打包项目并将其一键发布到npm中。
参考链接 https://docs.github.com/cn/free-pro-team@latest/actions/learn-github-actions
1、获取npm token，要让改工具有权力发布指定的npm包，就需要获取npm的通行证。也就是npm token.登录npm官网生成一个token。
2、获取到token之后，打开对应的代码仓库，到settings面板，创建一个新的secret，将token复制到内容区，并命名，这个名字就会在yaml 文件中用到。
3、然后就可以创建GitHub action，切到actions面板选择 node模板。然后会在你代码的master分支新建一个。GitHub文件夹。
4、代码演示 见demo.yml
name 就是这个配置文件的名字是啥。当然要语义化一点。
触发条件on push branches paths   就是在某些分支新执行push操作的时候，文件也要包含在paths 中。
任务jobs 名字可以自定义，可以有多个任务
步骤 steps 

