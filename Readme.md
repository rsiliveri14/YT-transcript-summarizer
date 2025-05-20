**🎥 YouTube Transcript Summarizer**

In the age of digital learning, students and professionals often rely on video-based content. However, not everyone has time to watch long videos to extract key information. This project solves that problem by providing an ML-powered Chrome extension that fetches and summarizes YouTube video transcripts in just a few clicks.

**📦 Installation & Setup**

**1\. Clone the Repositories**

git clone [https://github.com/rsiliveri14/youtube-transcript-summarizer-api.git](https://github.com/rsiliveri14/youtube-transcript-summarizer-api.git)

git clone [https://github.com/rsiliveri14/youtube-transcript-summarizer-frontend.git](https://github.com/rsiliveri14/youtube-transcript-summarizer-frontend.git)

git clone [https://github.com/rsiliveri14/youtube-transcript-summarizer-web-browser-extension.git](https://github.com/rsiliveri14/youtube-transcript-summarizer-web-browser-extension.git)

**2\. API Setup (Flask)**

cd youtube-transcript-summarizer-api

pip install \-r requirements.txt

python app.py

**3\. Frontend Setup (React)**

cd youtube-transcript-summarizer-frontend

npm install

npm start

**4\. Load Chrome Extension**

* Open Chrome and go to chrome://extensions  
* Enable **Developer Mode**  
* Click **Load unpacked**  
* Select the youtube-transcript-summarizer-web-browser-extension folder

