exports.data = {
  layout: "default.11ty.js",
  title: "Home"
};

const generateItems = (itemData) => {

  const items = itemData.map(item => {
    return `
      <li>
        <a href="masterpieces/${item.inventory_number}/">
          <figure class="card ut-bo-shadow">
            <div class="holder">
              <img
                src="${item.img_src}"
                alt="${this.maskEntities(item.title)}">
            </div>
            <figcaption>
              <p>${item.title}</p>
              <dl class="additional-info">
                <dt>Zuschreibung:</dt>
                <dd>${item.involved_persons[0].name}</dd>
                <dt>Datierung:</dt>
                <dd>${item.dating}</dd>
                <dt>Inventarnummer:</dt>
                <dd>${item.inventory_number}</dd>
                <dt>Maße:</dt>
                <dd>${item.dimensions}</dd>
              </dl>
            </figcaption>
          </figure>
        </a>
      </li>
    `;
  });

  return items.join("");
}

exports.render = (data) => {
  const { masterpieces } = data.collections;
  const masterpiecesHTML = generateItems(masterpieces);
  return `
    <main class="page-block">
      <div class="ut-box-medium ut-more-vspace">
        <p class="herotext">Lucas Cranach der Ältere war einer der größten und vielseitigsten Künstler Europas im 16. Jahrhundert. In fast fünf Jahrzehnten diente er drei sächsischen Kurfürsten als Hofmaler. Mit außergewöhnlicher Kreativität entwickelte er in einer der produktivsten Werkstätten seiner Zeit zahlreiche innovative Bildthemen und ikonografische Neuerungen, die das Zeitalter des Humanismus und Protestantismus beispiellos reflektieren. Heute sind noch über 1500 Gemälde von Cranach und seiner Werkstatt bekannt und diese repräsentieren nur einen Bruchteil der einst produzierten Werke. Hier finden Sie eine Aufwahl seiner Werke.
        </p>
      </div>
      <ul id="overview" class="overview grid-container" data-view-mode="card-view">
        ${masterpiecesHTML}
      </ul>
    </main>
  `;
};


