/* Classes & Functions
============================================================================ */

class FormValidator {
  constructor() {
    this.errorCount = 0;
    this.forms = document.querySelectorAll('form[data-js-validate=true]');
  }

  scan(){
    document.querySelectorAll('form[data-js-validate=true]').forEach((form) => {
      const $this = this;
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        $this.checkForm(form);
      });
    });
  };

  checkForm(form){
    const fields = form.querySelectorAll("[required]");

    fields.forEach((field) => {
      const filled = field.value.length > 5;
      if (!filled) {
        this.errorCount++;
        field.classList.add("ut-has-error");
      }
      else { field.classList.remove("ut-has-error"); }
    });

    if (this.errorCount === 0) {
      this.form.submit();
    }
  };
}

class ViewSwitcher {
  constructor() {
    this.switcherComponent = document.querySelector('#viewSwitcher');
    this.overviewContainer = document.querySelector('#overview');
  }

  init(){
    /* Gibt es überhaupt einen Overview Container?
       Denn auf den Detailseiten gibt es ja keinen :) */
    if (this.overviewContainer === null) {
      document.getElementById('viewSwitcher').remove();
      return;
    }

    /* Default aktivieren */
    this.switcherComponent.querySelector('[data-view=card-view]').classList.add('is-active');

    this.switcherComponent.querySelectorAll('[data-view]').forEach((ele) => {
      ele.addEventListener('click', (event) => {
        this.changeView(event.target);
      });
    });
  };

  changeView(ele){
    const viewMode = ele.dataset.view;
    const currentViewMode = this.overviewContainer.dataset.viewMode;
    const newViewMode = viewMode === 'list-view' ? 'list-view' : 'card-view';
    this.overviewContainer.dataset.viewMode = newViewMode;
    this.switcherComponent.querySelector(`[data-view=${currentViewMode}]`).classList.remove('is-active');
    this.switcherComponent.querySelector(`[data-view=${newViewMode}]`).classList.add('is-active');
  };
}

class NavToNeighbours {
  constructor() {

    let data = {};
    data.previous = false;
    data.next = false;

  }

  createNavigation(prevItem, nextItem) {

    const snippetPrevItem = !prevItem ? '' : `
      <div class="nav-item previous">
        <a href="${prevItem.url}">
          <img src="${prevItem.img_src}">
          <span>${prevItem.title}</span>
        </a>
      </div>`;
    
    const snippetNextItem = !nextItem ? '' : `
      <div class="nav-item next">
      <a href="${nextItem.url}">
      <img src="${nextItem.img_src}">
      <span>${nextItem.title}</span>
    </a>
      </div>`;
    
    const navSnippet = `
      <div class="nav-wrap">
        ${snippetPrevItem}
        ${snippetNextItem}
      </div>`;
    
    document.getElementById('mainContent').insertAdjacentHTML('beforeend', navSnippet);
  }

  init() {
    if (typeof prevItem === 'undefined' && typeof nextItem === 'undefined') return;
    this.createNavigation(prevItem, nextItem);
  };
}

class Accordian { 
  constructor() {
    this.elements = document.querySelectorAll("[data-target]");
  }

  init() {
    this.elements.forEach((ele) => {
      const buttonElement = document.createElement('button');
      buttonElement.classList.add("btn");
      buttonElement.classList.add("is-right");
      buttonElement.classList.add("icon-arrow-down");

      ele.appendChild(buttonElement);
      ele.addEventListener('click', () => { 
        ele.classList.toggle('is-open');
      });
    });
  } 
}

class DynamicContent{

  constructor(target, dynamicDataSrc){
    this.target = target;
    this.dataSrc = dynamicDataSrc;
  }

  async fetchData(dataSrc, parseJSON = true) {
    const response = await fetch(dataSrc);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let data = null;
    if (parseJSON) {
      data = await response.json();
    }
    else {
      data = await response.text();
    }
    return data;
  }

  createHTML(data){
    const html = data.results.map(item=>{

    });

    return html.join("");
  }

  async inject(){
    const data = await this.fetchData(this.dataSrc);
    const html = this.createHTML(data);
  }
}



/* Main
============================================================================ */

document.addEventListener("DOMContentLoaded", function (event) {

  /* Form Validator */
  const validator = new FormValidator();
  validator.scan();

  /* View Switcher */
  const viewSwitcher = new ViewSwitcher();
  viewSwitcher.init();

  /* Navigation zwischen den Gemälden */
  const nav = new NavToNeighbours();
  nav.init();

  /* Accordion */
  const accordian = new Accordian();
  accordian.init();

  /* Dynamic Content */
  const dynamicDataElement = document.querySelector('[data-dynamic-data-src]');
  if(dynamicDataElement !== null){
    const target = dynamicDataElement;
    const dynamicDataSrc = dynamicDataElement.dataset.dynamicDataSrc;
    const dynamicContent = new DynamicContent(target, dynamicDataSrc);
    dynamicContent.inject();
  }
  
});

