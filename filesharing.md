---
layout: page
title: 
permalink: /filesharing/
---

<style>
  body {
    font-family: "Arial", sans-serif;
    color: #333;
    background-color: #f5f5f5;
    line-height: 1.6;
  }
  .container {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  .card1 {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .card2 {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 20px;
  }
  
  .card h2 {
    font-size: 22px;
    color: #1e90ff;
    margin-bottom: 10px;
  }
  .card p {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .image-container {
    margin-top: 20px;
    text-align: center;
  }
  a {
    color: #1e90ff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  /* 响应式设计调整 */
  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }

    .card {
      padding: 15px;
    }

    .card h2 {
      font-size: 20px;
    }

    .card p {
      font-size: 14px;
    }

    a {
      word-wrap: break-word; /* 处理长网址溢出问题 */
    }
  }
</style>

<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
  </head>
  <body>
   
    <div>
      <span>用户名:</span>
      <input type="text" placeholder="请输入用户名..." id="username">
      <span>密码:</span>
      <input type="password" placeholder="请输入用户名..." id="passwd">
      <input type="button" value="登录" onclick="login()">
      <input type="button" id="btnClear" value="清除" onclick="doClear()" />
    </div>
    <script type="text/javascript">
      let accountAll = [{ // 存储账户json数据的数组
          username: 1,
          passwd: 'q'
        },
        {
          username: 456,
          passwd: 'asd'
        }
      ]
      function login() { //登陆判断
        let username = document.getElementById('username').value;
        let passwd = document.getElementById('passwd').value;
        let account = accountAll.filter(function(e) {
          return e.username == username
        })[0]; // 筛选账号返回数组，不存在则返回空数组
        if (!account) {
          alert('账户不存在');
        } else {
          if (account.username == username && account.passwd == passwd) {
            alert('登陆成功');    
            window.location.href = "http://www.baidu.com/";
          } else {
            alert('密码错误');
          }
        }
      }
      function doClear() { //获取页面所有的input框，是text和password框，内容=空串
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type == 'text' || inputs[i].type == 'password') {
            inputs[i].value = '';
          }
        }
      }
      //给清除按钮增加onclick事件
      let btnClear = document.getElementById('btnClear');
      btnClear.addEventListener('click', function() {
        doClear();
      });
    </script>
  </body>
</html>
