# 트위터의 aside 부분 마크업하기

* aside 태그는 본문과 동떨어진 내용을 마크업할 때 사용합니다.
  * 배너, 사이드 메뉴 등

* 이번에 aside는 header, 본문, footer로 나누어서 마크업하였습니다.
<br/>

### 1. header
* aside의 제목을 넣어서 마크업했습니다.
```html
<aside>
  <header>
    <h1>대한민국의 트렌드</h1>
  </header>
</aside>
```
<br/>

### 2. 본문
* 실시간 트렌드를 보여주는 개체라서 순서가 중요하기 때문에 ol태그를 사용하여 마크업 했습니다.
```html
<aside>
  <ol>
    <li>
      <a href="#">
        <div>
          <span>1. 트렌드</span>
          <button type="button">...</button>
        </div>
        <!--제목은 중요하다고 생각되어 strong으로 마크업했습니다.-->
        <strong>트렌드 제목</strong>
        <span>몇 개의 트윗이 올라왔는지</span>
      </a>
    </li>
  </ol>
</aside>
```
<br/>

### 3. footer
* 더보기가 aside의 마지막부분에 위치해서 footer로 마크업 했습니다.
```html
<aside>
  <footer>
    <a href="#">더보기</a>
  </footer>
</aside>
```
