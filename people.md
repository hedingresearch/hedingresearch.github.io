---
layout: page
title: 
permalink: /people/
---

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}
.container {
    max-width: 860px;
    margin: 0 auto;
    padding: 20px;
}
.profile-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #fff;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.profile-container img {
    border-radius: 8px;
    max-width: 220px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    margin-right: 40px;
}
.profile-card {
    flex: 1;
    min-width: 240px;
}
.profile-card h1 {
    margin-top: 0;
    font-size: 28px;
    color: #333;
}
.profile-card p {
    color: #444;
    line-height: 1.6;
    margin-bottom: 12px;
}
.section-title {
    border-bottom: 2px solid #ddd;
    margin-top: 40px;
    margin-bottom: 10px;
    color: #444;
    font-size: 20px;
}
.p_ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.p_li {
    padding: 4px 0;
    color: #555;
    font-size: 16px;
    line-height: 1.6;
}
@media (max-width: 768px) {
    .profile-container {
        flex-direction: column;
        align-items: center;
    }
    .profile-container img {
        margin: 0 0 20px 0;
    }
}
</style>

<div class="container">
  <div class="profile-container">
    <img src="/images/dinghe.png" width="460">
    <div class="profile-card">
      <h1><strong>丁贺</strong></h1>
      <p>教授，博士生导师<br>国家优青，北京市科技新星<br>北京理工大学 光电学院</p>
      <p>博士后：清华大学，中国<br>博士：里昂中央理工大学，法国<br>本硕：北京交通大学，中国</p>
      <p>E-mail: <a href="mailto:{{site.email}}">{{site.email}}</a></p>
    </div>
  </div>

  <h2 class="section-title">在读学生</h2>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px;">
    <!-- 博士研究生 -->
    <div style="flex: 1; min-width: 280px;">
      <h3>博士研究生</h3>
      <ul class="p_ul">
        <li class="p_li">2023年：谢子灿</li>
        <li class="p_li">2025年：林楠</li>
        <li class="p_li">2025年：孙瑀阳</li>
      </ul>
    </div>

    <!-- 硕士研究生 -->
    <div style="flex: 1; min-width: 280px;">
      <h3>硕士研究生</h3>
      <ul class="p_ul">
        <li class="p_li">2023年：李佳昕</li>
        <li class="p_li">2023年：任雪纯</li>
        <li class="p_li">2023年：梁宵</li>
        <li class="p_li">2024年：陶前程</li>
        <li class="p_li">2024年：杨卓凡</li>
        <li class="p_li">2025年：李贺林</li>
        <li class="p_li">2025年：骆文智</li>
        <li class="p_li">2025年：崔可歆</li>
      </ul>
    </div>
  </div>

  <h2 class="section-title">毕业学生</h2>
  <h3>硕士研究生</h3>
  <ul class="p_ul">
    <li class="p_li">2025年：薛钊 — 北京华为</li>
    <li class="p_li">2024年：彭焰秀 — 江西洪都航空工业集团</li>
    <li class="p_li">2024年：童文斌 — 北京航天飞腾装备技术</li>
    <li class="p_li">2024年：陆映同 — 上海航天电子有限公司</li>
    <li class="p_li">2023年：张海舰 — 北京国望光学科技有限公司</li>
    <li class="p_li">2023年：成子怡 — 青岛海信</li>
    <li class="p_li">2022年：吕国庆 — 北京兴唐通信科技有限公司</li>
  </ul>
</div>
