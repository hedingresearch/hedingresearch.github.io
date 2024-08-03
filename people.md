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
        max-width: 900px;
        margin: 0 auto;
    }
    .profile-container {
        display: flex;
        justify-content: center; /* 中心对齐内容 */
        align-items: center;
        margin-bottom: 30px;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .content-container {
        margin: 30px;
    }
    .profile-container img {
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-right: 80px; /* 图片与文本内容之间的间距 */
    }
    .profile-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center; /* 文本居中对齐 */
    }
    .profile-card h1 {
        margin: 0;
        font-size: 28px;
        color: #333;
    }
    .profile-card p {
        margin: 0;
        color: #666;
        line-height: 1.6;
    }
    h2 {
        border-bottom: 2px solid #ddd;
        padding-bottom: 0;
        margin-bottom: 3px;
        color: #444;
    }
    h3 {
        margin-bottom: 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    ul li {
        border-bottom: 0 solid #eee;
        color: #555;
        padding: 0;
    }
    ul li:last-child {
        border-bottom: none;
    }

    /* 响应式布局 */
    @media (max-width: 768px) {
        .profile-container {
            flex-direction: column;
        }
        .profile-container img {
            margin: 0 0 20px 0; /* 图片在小屏幕上的间距 */
        }
        .profile-card {
            align-items: center; /* 在小屏幕上居中内容 */
        }
    }
</style>

<div class="container">
    <div class="profile-container">
        <img src="/images/dinghe.png" width="460">
        <div class="profile-card">
            <h1><strong>丁贺</strong></h1><br>
            <p>
                长聘副教授，博士生导师<br>
                北京理工大学，光电学院<br><br>
            </p>
            <p>
                博士后，清华大学，中国<br>
                博士，里昂中央理工大学，法国<br>
                本硕，北京交通大学，中国
            </p><br>
            <p>E-mail: <a href="mailto:{{site.email}}">{{site.email}}</a></p>
        </div>
    </div>
    <div class="content-container">
        <h2>在读学生</h2>
        <ul>
            <li>2023年，谢子灿，博士生</li>
            <li>2023年，刘明珠，博士生</li>
            <li>2022年，薛钊，硕士生</li>
            <li>2023年，李佳昕，硕士生</li>
            <li>2023年，任雪纯，硕士生</li>
            <li>2023年，梁宵，硕士生</li>
        </ul>
        <br>
        <h2>毕业学生</h2>
        <h3>硕士：</h3>
        <ul>
            <li>2024年，彭焰秀，江西洪都航空工业集团有限责任公司</li>
            <li>2024年，童文斌，北京航天飞腾装备技术有限责任公司</li>
            <li>2024年，陆映同，上海航天电子有限公司</li>
            <li>2023年，张海舰，北京国望光学科技有限公司</li>
            <li>2023年，成子怡，青岛海信</li>
            <li>2022年，吕国庆，北京兴唐通信科技有限公司</li>
        </ul>
    </div>
</div>
