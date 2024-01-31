function e(e){return e&&e.__esModule?e.default:e}var r,t,n,i=globalThis,s={},a={},o=i.parcelRequire3a11;null==o&&((o=function(e){if(e in s)return s[e].exports;if(e in a){var r=a[e];delete a[e];var t={id:e,exports:{}};return s[e]=t,r.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){a[e]=r},i.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,r){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,n=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)n.set(r[t],{baseUrl:e,path:r[t+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.8e4764d3.js","hfd23","icons.c14567a0.svg"]'));var c={};c=new URL("icons.c14567a0.svg",import.meta.url).toString();var l=class{_data;_parentElement;constructor(e){this._parentElement=document.querySelector(e)}render(e){if(this._data=e,!e||Array.isArray(e)&&0===e.length)return this.renderError("No data available.");let r=this._generateMarkup();this._parentElement.innerHTML=r}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
            <div class="spinner">
                <svg>
                    <use href="${e(c)}#icon-loader"></use>
                </svg>
            </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){this._clear();let t=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${e(c)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${r}</p>
            </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){this._clear();let t=`
            <div class="message">
                <div>
                    <svg>
                        <use href="${e(c)}#icon-smile"></use>
                    </svg>
                </div>
                <p>${r}</p>
            </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}};(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(n=i[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var s=t.split("/");this.numerator=s[0],this.denominator=s[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(r(this.denominator)){var e=t(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(r(this.numerator)){var e=t(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(r);return(n.forEach(function(e){var r=i.indexOf(e);r>=0&&(t.push(e),i.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},n=Fraction;var u=new class extends l{_parentElement;_data;_errorMessage="We could not find that recipe. Please try another one!";_successMessage="Recipe successfully loaded!";constructor(e){super(e),this._parentElement=document.querySelector(e)}render(e){this._data=e;let r=this._generateMarkup();this._parentElement.innerHTML=r}addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,r=>e(r)))}_generateMarkup(){return`<figure class="recipe__fig">
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
        ${this._data.ingredients?this._data.ingredients.map(r=>{let t=r.quantity?new n(r.quantity).toString():"";return`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${e(c)}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${t}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${r.unit}</span>
              ${r.description}
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
      </div>`}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
        <div class="spinner">
          <svg>
            <use href="${e(c)}#icon-loader"></use>
          </svg>
        </div>
      `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){this._clear();let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${e(c)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${r}</p>
        </div>
      `;this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){this._clear();let t=`
        <div class="message">
          <div>
            <svg>
              <use href="${e(c)}#icon-smile"></use>
            </svg>
          </div>
          <p>${r}</p>
        </div>
      `;this._parentElement.insertAdjacentHTML("afterbegin",t)}}(".recipe"),d=new class{_parentEl;constructor(e){this._parentEl=document.querySelector(".search"),this._parentEl.addEventListener("click",this._handleClick.bind(this))}_clearInput(){this._parentEl.querySelector(".search__field").value=""}getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_handleClick(e){}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}};class h extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";constructor(){super(".results")}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(r){return`
        <li class="preview">
            <a class="preview__link" href="#${r.id}">
            <figure class="preview__fig">
                <img src="${r.image}" alt="${r.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${r.title}</h4>
                <p class="preview__publisher">${r.publisher}</p>
                <div class="preview__user-generated">
                <svg>
                    <use href="${e(c)}#icon-user"></use>
                </svg>
                </div>
            </div>
            </a>
        </li>`}}var p=new h;const m="https://forkify-api.herokuapp.com/api/v2/recipes/",_=async e=>{try{let r=fetch(e),t=await Promise.race([r,new Promise(function(e,r){setTimeout(function(){r(Error("Request took too long! Timeout after 5 second"))},5e3)})]),n=await t.json();if(!t.ok)throw Error("Error al obtener los datos");return n}catch(e){throw e}},f={recipe:{},search:{query:"",results:[]}},v=async e=>{try{let r=`${m}/${e}`,{recipe:t}=(await _(r)).data;f.recipe=t}catch(e){throw e}},g=async e=>{try{let r=`${m}/?search=${e}`,t=await _(r);return f.search.query=e,f.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),f.search.results}catch(e){throw e}};async function y(){try{let e=window.location.hash.slice(1);if(!e)return;u.renderSpinner(),await v(e),u.render(f.recipe)}catch(e){u.renderError(e.message)}}async function b(e){try{let e=d.getQuery();if(!e)return;p.renderSpinner(),await g(e),p.render(f.search.results)}catch(e){console.log(e)}}u.addHandlerRender(y),d.addHandlerSearch(b);
//# sourceMappingURL=index.8e4764d3.js.map
