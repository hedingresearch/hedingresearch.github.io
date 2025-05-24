import os
import requests

# 读取 GitHub Secrets 中的 API Key
api_key = os.getenv("GOOGLE_API_KEY")
url = f"https://translation.googleapis.com/language/translate/v2?key={api_key}"

# 翻译函数
def translate_text(text, target_lang):
    payload = {"q": text, "target": target_lang}
    response = requests.post(url, json=payload)
    return response.json()["data"]["translations"][0]["translatedText"]

# 处理整个网站内容
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

translated_content = translate_text(content, "en")

with open("index_en.html", "w", encoding="utf-8") as f:
    f.write(translated_content)

print("Translation complete. New file: index_en.html")
