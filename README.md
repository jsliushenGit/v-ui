# 安装
``` JavaScript
npm i @jsliushen/v-ui -S
```

# 整体引入
``` JavaScript
import Vue from 'vue'
import VUI from '@jsliushen/v-ui'
import '@jsliushen/v-ui/lib/index.css'

Vue.use(VUI)
```

# 按需引入
## 方案一
``` JavaScript
import Vue from 'vue'
import { Button } from '@jsliushen/v-ui'
import '@jsliushen/v-ui/lib/button/index.css'
Vue.use(Button)
```

## 方案二
安装 [` babel-plugin-component `](https://github.com/ElementUI/babel-plugin-component)

``` JavaScript
npm i babel-plugin-component -D
```
配置.babelrc
``` json
{
  //......
  // 其他配置
  //......
  "plugins": [
    [
      "component",
      {
        "libraryName": "v-ui",
        "libDir": "lib",
        "style": "index.css"
      }
    ]
  ]
}
```
使用时直接引入组件，不再需要显示的引入css
``` JavaScript
import Vue from 'vue'
import { Button } from '@jsliushen/v-ui'

Vue.use(Button)
```

## cdn引入
``` JavaScript
<script src="https://unpkg.com/@jsliushen/v-ui/lib/v-ui.umd.js"></script>
```

### cdn demo
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vui</title>
  <link rel="stylesheet" href="https://unpkg.com/@jsliushen/v-ui/lib/index.css">
</head>
<body>
  <div id="app">
    <v-button type="primary" @click="handleClick">click me</v-button>
  </div>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/@jsliushen/v-ui/lib/v-ui.umd.js"></script>

  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { 
          message: 'hello VUI' 
        }
      },

      methods: {
        handleClick() {
          alert(this.message)
        }
      }
    })
  </script>
</body>
</html>
```