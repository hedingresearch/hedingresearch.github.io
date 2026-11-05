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
  /* 两张卡片共用基础样式，第二张保留顶部间距。 */
  .card1,
  .card2 {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .card2 {
    margin-top: 20px;
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

  /* 新闻预览：桌面双列，手机单列。 */
  .news-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .news-preview { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e5eaf0; border-radius: 8px; background: #fff; color: #333; transition: box-shadow .2s; }
  .news-preview:hover { text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,.1); }
  .news-preview:focus-visible { outline: 3px solid #1e90ff; outline-offset: 3px; }
  .news-cover { position: relative; height: 170px; background: #eef5fc; overflow: hidden; }
  .news-cover img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .news-cover span { position: absolute; bottom: 8px; left: 10px; background: rgba(255,255,255,.94); padding: 2px 8px; border-radius: 4px; color: #526579; font-size: 12px; }
  .news-body { display: flex; flex: 1; flex-direction: column; padding: 16px; }
  .news-source { color: #718096; font-size: 12px; }
  .news-preview h3 { margin: 8px 0; font-size: 17px; line-height: 1.5; color: #1e90ff; }
  .news-preview .news-description { font-size: 14px; margin: 0 0 14px; color: #555; }
  .news-more { margin-top: auto; font-size: 13px; color: #1e90ff; }
  .news-section { margin: 22px 0 12px; font-size: 17px; }
  @media (max-width: 600px) { .news-grid { grid-template-columns: 1fr; } }
</style>

<div class="container">
  <div class="card card1">
    <h2><strong>研究方向</strong></h2>
    <p><strong>
      1. 面向脑科学（神经接口）应用的新型光电半导体器件<br>
      2. 面向生物医疗应用的植入式与可穿戴式传感微系统
    </strong></p>
    <div class="image-container">
      {% include image.html url="/images/研究成果.jpg" width=650 align="center"%}
    </div>
  </div>

  <div class="card card2">
    <h2><strong>新闻报道</strong></h2>
    <h3 class="news-section">新闻简介</h3>
    <div class="news-grid">
      <a class="news-preview" href="https://www.news.cn/sci-tech/20251209/64e0ab410736436f991e0482be4dfcfb/c.html" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">新华网</span><h3>科技青年丨探微见宏图 · 花絮短视频</h3><p class="news-description">聚焦青年科技工作者的科研探索与创新故事。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="https://www.stdaily.com/web/gdxw/2025-12/05/content_443029.html" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">科技日报</span><h3>科技青年丨探微见宏图</h3><p class="news-description">走近微纳技术与植入式光电子探针研究。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
    </div>

    <h3 class="news-section">1. 微纳光电器件类工作</h3>
    <div class="news-grid">
      <a class="news-preview" href="{{ site.research_1_1 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">微信公众号</span><h3>植入式上转换光源</h3><p class="news-description">查看植入式上转换光源相关报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_1_2_1 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">澎湃新闻</span><h3>光学温度传感</h3><p class="news-description">查看光学温度传感相关报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_1_2_2 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="https://opt.bit.edu.cn/images/2022-05/77f0615b0546480d8a23e8699425a41b.png" alt="" loading="lazy" onerror="this.hidden=true"><span>原文配图</span></div>
        <div class="news-body"><span class="news-source">北京理工大学光电学院</span><h3>上转换温度传感研究新进展</h3><p class="news-description">基于微纳光电半导体的上转换温度传感设计。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_1_3_1 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">微信公众号</span><h3>新型光学传感机制 · 报道一</h3><p class="news-description">查看新型光学传感机制相关报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_1_3_2 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">微信公众号</span><h3>新型光学传感机制 · 报道二</h3><p class="news-description">查看新型光学传感机制相关报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
    </div>

    <h3 class="news-section">2. 系统应用方面工作</h3>
    <div class="news-grid">
      <a class="news-preview" href="{{ site.research_2_1_1 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="/images/研究成果.jpg" alt="" loading="lazy" onerror="this.hidden=true"><span>课题组研究配图</span></div>
        <div class="news-body"><span class="news-source">腾讯新闻</span><h3>无线植入式脑组织氧含量监测</h3><p class="news-description">查看无线植入式脑组织氧含量监测相关报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_2_1_2 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="https://opt.bit.edu.cn/images/2024-01/3d8127bf822c401dbfe0ef4450b1c54d.png" alt="" loading="lazy" onerror="this.hidden=true"><span>原文配图</span></div>
        <div class="news-body"><span class="news-source">北京理工大学光电学院</span><h3>无线植入式脑组织氧含量监测研究进展</h3><p class="news-description">微型光电探针用于深层脑组织氧分压的无线监测。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
      <a class="news-preview" href="{{ site.research_2_2 }}" target="_blank" rel="noopener noreferrer">
        <div class="news-cover"><img src="https://opt.bit.edu.cn/images/2024-07/8e1229ae764a4609a7f0939aff7f37a8.png" alt="" loading="lazy" onerror="this.hidden=true"><span>原文配图</span></div>
        <div class="news-body"><span class="news-source">北京理工大学光电学院</span><h3>可穿戴式柔性光疗贴片研究进展</h3><p class="news-description">查看智能光学治疗贴片相关研究报道。</p><span class="news-more">查看原文 ↗</span></div>
      </a>
    </div>
  </div>
</div>

