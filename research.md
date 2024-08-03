---
layout: page
title: 
permalink: /research/
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

  /* 响应式设计 */
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
  }
</style>

<div class="container">
  <div class="card card1">
    <h2><strong>研究方向</strong></h2>
    <p><strong>
      1. 面向脑科学（神经接口）应用的新型光电半导体器件<br>
      2. 面向生物医疗应用的植入式与可穿戴式传感微系统
    </strong></p>
    <div class="image-container">
      {% include image.html url="/images/研究成果.jpg" width=500 align="center"%}
    </div>
  </div>

  <div class="card card2">
    <h2><strong>新闻报道</strong></h2>
    <p>
      <strong>1. 微纳光电器件类工作：</strong><br>
      植入式上转换光源<br>
      <a href="{{site.research_1_1}}" target="_blank">{{site.research_1_1}}</a>
    </p>
    <p>
      光学温度传感<br>
      <a href="{{site.research_1_2_1}}" target="_blank">{{site.research_1_2_1}}</a><br>
      <a href="{{site.research_1_2_2}}" target="_blank">{{site.research_1_2_2}}</a><br>
    </p>
    <p>
      新型光学传感机制<br>
      <a href="{{site.research_1_3_1}}" target="_blank">{{site.research_1_3_1}}</a><br>
      <a href="{{site.research_1_3_2}}" target="_blank">{{site.research_1_3_2}}</a><br>
    </p>
    <p>
      <strong>2. 系统应用方面工作：</strong><br>
      无线植入式脑组织氧含量监测<br>
      <a href="{{site.research_2_1_1}}" target="_blank">{{site.research_2_1_1}}</a><br>
      <a href="{{site.research_2_1_2}}" target="_blank">{{site.research_2_1_2}}</a><br>
    </p>
    <p>
      智能光学治疗贴片<br>
      <a href="{{site.research_2_2}}" target="_blank">{{site.research_2_2}}</a>
    </p>
  </div>
</div>
