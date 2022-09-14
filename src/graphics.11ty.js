exports.data = {
  layout: "default.11ty.js",
  title: "Graphics"
};

exports.render = (data) => {
  return `
    <main>
      <div class="bg-darker ut-has-low-contrast">
        <section class="page-block">
          <h2 class="is-loose">Ausstellungskatalog</h2>
          <ul id="overview" class="overview grid-container" data-view-mode="small-card-view" data-dynamic-data-src="/fd-2022-live-coding/json/cda-graphics.json" >
          </ul>
        </section>
      </div>
    </main>
  `;
};


