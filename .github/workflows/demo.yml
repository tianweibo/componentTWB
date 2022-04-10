name:demo
on:
   push:
       branches:
              - master
              - dev
       paths:
              - '.github/workflows/**'
              - 'src/**'
jobs:
  test1:
      runs-on: 'ubuntu-latest'             # 在什么系统 下跑代码，默认这个就行
    steps:
      - uses: actions/checkout@v2          # git pull 拉取代码
      - name: Use Node.js                  # 可有可无
        uses: actions/setup-node@v1        # 安装node
        with:                              # node 版本
          node-version:14
      - name: print node version
        run: |                             # 自定义的命令   加竖线是有多个命令
             node -v 
             npm -v
  test2:
     runs-on: "ubuntu-latest"
     steps:
        -run: touch a.txt
        -run: echo 100 > a.txt
        -run: cat a.txt
