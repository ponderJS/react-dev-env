# 知因智慧前端开发环境

* 开发环境    
```
    node + webpack + babel
```

* 基础框架/类库
```
    react + react-router + antd
``` 

* 源码目录结构
```
    src/
      |__ assets/           => 字体/图片
      |__ components/       => UI组件
      |__ pages/            => 页面组件
        |__ error.js
        |__ error.less  
        |__ home.js         
        |__ home.less
        |__ login.js         
        |__ login.less
      |__ services          => 接口定义
      |__ utils/            => 工具方法
      |__ index.html        => 页面入口
      |__ index.js          => 程序入口
      |__ index.less        => 公共样式
```

* 开发规范

1. 文件名使用小写英文单词命名，多个单词用中划线分隔；
2. 页面级组件包括一个js和一个less样式文件，二者文件名相同；
3. 接口定义统一放在services目录下，按功能或业务分类；
4. 所有类型资源都统一由webpack及相应插件处理，除js文件外，引用图片/样式等文件时需保留后缀名；
5. 样式类名使用英文小写单词，多个单词用中划线分隔，必要时可使用下划线分隔表示该类的特殊状态，如：classname-hello_hi；
6. 引用或覆盖antd样式需按less语法使用；

* 开发调试
```
    npm run dev
```  

* 打包编译
```
    npm run build
```


