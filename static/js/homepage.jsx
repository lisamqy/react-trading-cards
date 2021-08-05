"use strict";

function Homepage() {
  return (
    <div class="homepage">
      <p>Click ⬇️ to play!</p>
      <a href="/cards"><img class="homeballoonicorn" src="/static/img/balloonicorn.jpg" alt="This is Balloonicorn!"/></a>
      <br></br>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
