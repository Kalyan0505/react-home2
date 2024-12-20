const MyApp = () => {
  return (
    <div class="container">
      <h1>Topics Covered</h1>
      <p>
        The following is a list of all the topics we cover in MDN learning area.
        <br></br>
        <br></br>
        <article>Getting started with the Web</article>
        <p class="tab">
          Provides a practical introduction to complete beginners.
        </p>
        <br></br>
        <article>HTML Structuring the web</article>
        <p class="tab">
          HTML is the language that we use to structure the different part of
          our content <br></br>
          and defines what their meaning or purpose is. This topic teaches HTML
          in detail.
        </p>
        <br></br>
        <br></br>
        <article>CSS - Styling Web</article>
        <p class="tab">
          CSS is the language that we use to control our wen content's style and
          layout, as <br></br>
          well as adding behaviour like animation. This topic provides
          comprehensive <br></br> coversage of CSS.
        </p>
      </p>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.querySelector("#root"));
