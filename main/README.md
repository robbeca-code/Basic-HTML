# main 마크업하기

### main을 총 3가지로 나누어서 마크업 하였습니다.
* main의 header
* main의 section 1 (Wirte a tweet)
* main의 section 2 (timeline)
<br/>

1. main의 header
- 전체적으로 main이 무엇인지 나타내는 제목을 header 태그로 의미있게 묶었습니다.
```html
<main>
  <header>
  <h1>홈</h1>
  <button type="button" class="menu">메뉴</button>

  <!--menu 버튼을 누르면 drop down menu가 보이도록 했습니다.-->
  <div class="drop-down">
    ...
  </div>
  </header>
</main
```
<br/>

2. main의 section 1 (Write a tweet)
- 트윗을 작성하는 여러 요소가 들어있어서 section 태그를 사용하여 묶었습니다.
- section 태그는 sectioning 태그라서 무조건 h1(heading 태그 아무거나)을 넣었습니다.
```html
<main>
  <section>
    <!--hidden이라는 클래스를 사용하여 브라우저에 보이지 않도록 css 작업을 하였습니다.-->
    <h1 class="hidden">트윗쓰기</h1>
  </section>
</main>
```
- tweet 작성 부분과 하단 버튼 영역을 구분하여 마크업 하였습니다.
<br/>

3. main의 section 2 (timeline)
- 여러 트윗이 들어있어서 section으로 전체를 묶고, 트윗 하나하나를 article를 사용하였습니다.
- section, article 다 sectioning 태그라서 heading 태그를 넣었습니다.
- article에는 각각의 header과 footer을 사용하여 div를 사용하기 보단 의미를 더 명확하게 마크업 하였습니다.
```html
<section>
  <article>
    <!--트윗을 작성한 사용자의 프로필, 닉네임, 메뉴 버튼을 header에 넣었습니다.-->
    <header>
      <img src="#" alt="프로필 사진"/>
      <h2>닉네임</h2>
      <button type="button">메뉴</button>
    </header>

    <!--트윗의 본문은 span 태그를 사용하였습니다-->
    <span>...</span>

    <!--트윗 하단에 있는 좋아요, 리트윗 등 버튼을 footer로 묶어 article의 마지막 문단을 나타냈습니다-->
    <footer>...</footer>
  </article>
</section>
```
 
