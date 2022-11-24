# Translate App

Stack : React.js <br>
Description : Google, libretranslate Api를 사용하여 번역기 만들기
<br>
<br>

[Trouble Shooting]

Google Api는 언어명을 불러오지 않음
-> 다른 API 사용
-> translate 할 땐 구글 API 사용해보고자 했는데

구글에서 제공하는 Code Snippets 을 보면 target 과 source 가 'es', 'en'과 같이 줄임말이 들어가야함.
즉 실제로 들어갈 input, output 은 'English' (data name) 가 아닌 'en' (data code)가 들어가야함

```jsx
const encodedParams = new URLSearchParams();
encodedParams.append('q', 'Hello, world!');
encodedParams.append('target', 'es');
encodedParams.append('source', 'en');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '732dced0demsh38aeb5aaede106ap104399jsn713837b502d8',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  },
  data: encodedParams,
};
```

[해결]
inputLanguage 와 outputLanguage 는 languagesList 에서만 쓰이도록 하고 code 를 불러오도록 계획
-> id 에 code를 넣어주자 ! 그리고 setInput, setOutput을 props로 받아서 모달에서 onClick 이벤트에 `setInput(e.target.id);` 를 해주고 바뀐 state를 target 과 source에 담아주어 해결!

```jsx
//App.jsx
encodedParams.append('q', textToTranslate);
encodedParams.append('target', output);
encodedParams.append('source', input);
```
