function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,s={},a={},o=i.parcelRequire3a11;null==o&&((o=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},i.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.6035c020.js","hfd23","icons.c14567a0.svg"]'));var c={};c=new URL("icons.c14567a0.svg",import.meta.url).toString();var l=class{_data;_parentElement;constructor(e){this._parentElement=document.querySelector(e)}render(e){if(this._data=e,!e||Array.isArray(e)&&0===e.length)return this.renderError("No data available.");let t=this._generateMarkup();this._parentElement.innerHTML=t}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
            <div class="spinner">
                <svg>
                    <use href="${e(c)}#icon-loader"></use>
                </svg>
            </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){this._clear();let r=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${e(c)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>`;this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){this._clear();let r=`
            <div class="message">
                <div>
                    <svg>
                        <use href="${e(c)}#icon-smile"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>`;this._parentElement.insertAdjacentHTML("afterbegin",r)}};(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var s=r.split("/");this.numerator=s[0],this.denominator=s[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;var u=new class extends l{_parentElement;_data;_errorMessage="We could not find that recipe. Please try another one!";_successMessage="Recipe successfully loaded!";constructor(e){super(e),this._parentElement=document.querySelector(e)}render(e){this._data=e;let t=this._generateMarkup();this._parentElement.innerHTML=t}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,t=>e(t)))}_generateMarkup(){return`<figure class="recipe__fig">
        <img src="${this._data.image_url}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="../img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${e(c)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${e(c)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
              <use href="${e(c)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${e(c)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${e(c)}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients?this._data.ingredients.map(t=>{let r=t.quantity?new n(t.quantity).toString():"";return`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${e(c)}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${r}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${t.unit}</span>
              ${t.description}
            </div>
          </li>
          `}).join(""):""}      
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.source_url}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${e(c)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
          <svg>
            <use href="${e(c)}#icon-loader"></use>
          </svg>
        </div>
      `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){this._clear();let r=`
        <div class="error">
          <div>
            <svg>
              <use href="${e(c)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${t}</p>
        </div>
      `;this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){this._clear();let r=`
        <div class="message">
          <div>
            <svg>
              <use href="${e(c)}#icon-smile"></use>
            </svg>
          </div>
          <p>${t}</p>
        </div>
      `;this._parentElement.insertAdjacentHTML("afterbegin",r)}}(".recipe"),d=new class{_parentEl;constructor(e){this._parentEl=document.querySelector(".search"),this._parentEl.addEventListener("click",this._handleClick.bind(this))}_clearInput(){this._parentEl.querySelector(".search__field").value=""}getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_handleClick(e){}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}};class h extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";constructor(){super(".results")}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`
        <li class="preview">
            <a class="preview__link" href="#${t.id}">
            <figure class="preview__fig">
                <img src="${t.image}" alt="${t.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${t.title}</h4>
                <p class="preview__publisher">${t.publisher}</p>
                <div class="preview__user-generated">
                <svg>
                    <use href="${e(c)}#icon-user"></use>
                </svg>
                </div>
            </div>
            </a>
        </li>`}}var p=new h;class _ extends l{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){if(!this._parentElement)return"";let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
            <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
                <use href="${e(c)}#icon-arrow-right"></use>
            </svg>
            </button>`:t===r&&r>1?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${e(c)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${t-1}</span>
            </button>`:t<r?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${e(c)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${t-1}</span>
            </button>
            <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
                <span>Page ${t+1}</span>
                <svg class="search__icon">
                    <use href="${e(c)}#icon-arrow-right"></use>
                </svg>
            </button>`:""}}var g=new _;const m="https://forkify-api.herokuapp.com/api/v2/recipes/",f=async e=>{try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),n=await r.json();if(!r.ok)throw Error("Error al obtener los datos");return n}catch(e){throw e}},v={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},b=async e=>{try{let t=`${m}/${e}`,{recipe:r}=(await f(t)).data;v.recipe=r}catch(e){throw e}},y=async e=>{try{let t=`${m}/?search=${e}`,r=await f(t);return v.search.query=e,v.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),v.search.results}catch(e){throw e}},w=(e=v.search.page)=>{v.search.page=e;let t=(e-1)*v.search.resultsPerPage,r=e*v.search.resultsPerPage;return v.search.results.slice(t,r)};async function $(){try{let e=window.location.hash.slice(1);if(!e)return;u.renderSpinner(),await b(e),u.render(v.recipe)}catch(e){u.renderError(e.message)}}async function E(){try{let e=d.getQuery();if(!e)return;p.renderSpinner(),await y(e),p.render(w()),g.render(v.search)}catch(e){console.log(e)}}async function M(e){try{w(e),p.render(w()),g.render(v.search)}catch(e){console.error(e)}}u.addHandlerRender($),d.addHandlerSearch(E),g.addHandlerClick(M);
//# sourceMappingURL=index.6035c020.js.map
