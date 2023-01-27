import './App.css'

function App() {
  return (
    <div className="App">
      <div>2023 年</div>
      <div class="bookshelf">
        <div class="book">
          <div class="side spine">
            <span class="spine-title">程序员修炼之道</span>
            {/* <span class="spine-author"> PG </span> */}
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
        <div class="book">
          <div class="side spine">
            <span class="spine-title">程序员修炼之道</span>
            <span class="spine-author"> PG </span>
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
      </div>
      <div>2022 年</div>
      <div class="bookshelf">
        <div class="book">
          <div class="side spine">
            <span class="spine-title"> 邓小平时代 </span>
            <span class="spine-author"> PG </span>
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
        <div class="book">
          <div class="side spine">
            <span class="spine-title"> Book Title </span>
            <span class="spine-author"> PG </span>
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
        <div class="book">
          <div class="side spine">
            <span class="spine-title"> Book Title </span>
            <span class="spine-author"> PG </span>
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
        <div class="book">
          <div class="side spine">
            <span class="spine-title"> Book Title </span>
            <span class="spine-author"> PG </span>
          </div>
          <div class="side top"></div>
          <div class="side cover"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
