# Mini Market using Redux

Stack : React.js, Redux, Sementic UI <br>
Description : fake api를 활용하여 미니 마켓 웹페이지 제작
<br>
<br>
<img src="https://user-images.githubusercontent.com/96714788/202423534-104b757d-b96b-4605-ae8b-605ddd6828d4.gif">

## NOTE

### Folder tree

```
mini-market
 ┣ 📂 public
 ┃ ┗ index.html
 ┣ 📂 continers
 ┣ 📂 actions
 ┃ ┣ Header.jsx
 ┃ ┣ ProductComponents.jsx
 ┃ ┣ ProductDetail.jsx
 ┃ ┗ ProductListing.jsx
 ┣ 📂 redux
 ┃ ┣ 📂 actions
 ┃ ┃ ┗ ProductAction.js
 ┃ ┣ 📂 constants
 ┃ ┃ ┗ acrtion-types.js
 ┃ ┣ 📂 reducers
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ productReducer.js
 ┃ ┗ store.js
 ┣ App.jsx
 ┗ index.js
```

### install

```
npm install axios
npm install react-router-dom
npm install redux@4.1.2 react-redux
npm install semantic-ui-react semantic-ui-css
```

리덕스 크롭 익스텐션 <br>
` window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
