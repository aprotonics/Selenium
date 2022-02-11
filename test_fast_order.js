search_button_selector = '#static-html a.footer__link--all-products'
filters_selector = '.ec-filters__wrap .ec-filter--offers .form-control__inline-label'
product_prices_selector = '.grid__products .grid-product .grid-product__price-value'
cart_button_selector = '.details-product-purchase__add-buttons > div:nth-child(2) > button.form-control__button'
cart_icon_selector = '.float-icons__icon--cart > .ec-cart-widget > .ec-minicart'
email_input_selector = '#ec-cart-email-input'
checkbox_agree_selector = '#form-control__checkbox--agree'
place_order_button_selector = '.form-control__button > .form-control__loader'
name_input_selector = '#ec-full-name'
address_input_selector = '#ec-address-line1'
city_input_selector = '#ec-city-list'
postal_input_selector = '#ec-postal-code'
place_order_button2_selector = '.form-control__button > .form-control__loader'
thanks_block_selector = 'div.ec-store__confirmation-page h1.page-title__name'

timeInterval = 500


async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
}

async function fillInput(input, value) {
  input.value = value;
  await input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await input.dispatchEvent(new Event('input', { bubbles: true }));
  await input.dispatchEvent(new Event('change', { bubbles: true }));
}

async function main_page() {
  search_button = await document.querySelector(search_button_selector)
  await search_button.click()
}

function search_page() {
  let filters

  function findFilters() {
    filters = document.querySelector(filters_selector)
    if (filters) {
      clearInterval(timerId)
      findProduct()
    }
  }

  function findProduct() {  
    product_prices = document.querySelectorAll(product_prices_selector)
    for (i = 0; i < product_prices.length; i++) {
      price = parseFloat(product_prices[i].textContent.split("$")[1])
      if (price == 0.00) {
        product_prices[i].click()
        break
      } 
    }
  }

  let timerId = setInterval(findFilters, timeInterval);
}

function product_page() {
  let cart_button

  async function findCartButton() {
    cart_button = await document.querySelector(cart_button_selector)
    if (cart_button) {
      clearInterval(timerId)
      await cart_button.click()
      cart_icon = await document.querySelector(cart_icon_selector)
      await cart_icon.click()
    }
  }

  let timerId = setInterval(findCartButton, timeInterval);
}

function cart_page() {
  let email_input

  function findEmailInput() {
    email_input = document.querySelector(email_input_selector)
    if (email_input) {
      clearInterval(timerId)
      fillCartPage()
    }
  }

  async function fillCartPage() {
    fillInput(email_input, 'test@mail.ru')

    checkbox_agree = await document.querySelector(checkbox_agree_selector)
    await checkbox_agree.click()

    place_order_button = await document.querySelector(place_order_button_selector)
    await place_order_button.click()
  }
    
  let timerId = setInterval(findEmailInput, timeInterval);
}

function checkout_page() {
  let name_input

  function findNameInput() {
    name_input = document.querySelector(name_input_selector)
    if (name_input) {
      clearInterval(timerId)
      fillCheckoutPage()
    }
  }

  async function fillCheckoutPage() { 
    fillInput(name_input, 'test')

    address_input = await document.querySelector(address_input_selector)
    fillInput(address_input, 'test')

    city_input = await document.querySelector(city_input_selector)
    fillInput(city_input, 'test')

    postal_input = await document.querySelector(postal_input_selector)
    fillInput(postal_input, '100000')

    place_order_button2 = await document.querySelector(place_order_button2_selector)
    await place_order_button2.click()
  }

  let timerId = setInterval(findNameInput, timeInterval); 
}

function assert_page(time) {
  let thanks_block

  function findThanksBlock(time) {
    thanks_block = document.querySelector(thanks_block_selector)
    if (thanks_block) {
      clearInterval(timerId)
      fillAssertPage(time)
    }
  }
  
  async function fillAssertPage(time) {
    thanks_text = thanks_block.textContent

    let scriptUrl = 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js'
    await loadScript(scriptUrl);

    await chai.assert.include(thanks_text, 'Спасибо за заказ')

    await console.log("OK")

    time = performance.now() - time;
    console.log('Время выполнения = ', time, ' мс');
  }

  let timerId = setInterval(findThanksBlock, timeInterval, time); 
}

async function run() {
  let time = performance.now();

  await main_page()

  await search_page()

  await product_page()

  await cart_page()

  await checkout_page()

  await assert_page(time)
  }

run()

// Добавить проверку заказа через API https://api-docs.ecwid.com/reference/get-order
// Исправить названия на CamelCase

