---
layout: page
title: 
permalink: /contact/
---

<style>
    .container {
        max-width: 1200px;
        margin: 30px 0 65px 0;
        padding: 10px;
    }
    .contact-info {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contact-info h2 {
        font-size: 24px; /* 调整标题字体大小 */
        color: #333;
        margin: 30px 0 0 0;
    }
    .contact-info p {
        font-size: 16px; /* 调整正文字体大小 */
        color: #666;
        line-height: 1.6;
        margin: 0 0 10px;
    }
    .contact-info a {
        color: #007bff;
        text-decoration: none;
    }
    .contact-info a:hover {
        text-decoration: underline;
    }
    .contact-details {
        flex: 1;
        padding-right: 30px;
        text-align: left; /* 设置文本靠左对齐 */
    }
    .contact-map {
        flex: 1;
        text-align: right;
    }
    .contact-map img {
        border-radius: 10px;
        width: 100%;
        max-width: 400px;
        height: auto;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .contact-info {
            flex-direction: column;
            align-items: flex-start;
        }

        .contact-map {
            text-align: center;
            margin-top: 20px;
        }

        .contact-map img {
            max-width: 100%;
        }
    }
</style>

<div class="container">
    <div class="contact-info">
        <div class="contact-details">
            <p><strong>Email:</strong> <a href="mailto:{{site.email}}">{{site.email}}</a></p>
            <p><strong>招贤纳士：</strong><br>博士后、博士（1–2 名/年）、硕士（3 名/年）</p>
            <p><strong>专业要求：</strong><br>具有光学工程、电子信息、材料、生物医学等领域背景</p>
            <h2><strong>办公地址</strong></h2>
            <p>
                <a href="{{site.contact_address}}" target="_blank">光电楼（1号楼）306室</a><br>
                北京理工大学<br>
                北京市海淀区中关村南大街5号
            </p>
        </div>
        <div class="contact-map">
        <a href="{{site.contact_address}}" target="_blank">
            <img src="/images/map.png" alt="办公地址地图">
        </a>
        </div>
    </div>
</div>
