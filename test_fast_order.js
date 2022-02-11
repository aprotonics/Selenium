to_cart_button_selector = '.details-product-purchase__add-buttons > div:nth-child(2) > button.form-control__button'
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

timeInterval = 100


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

async function tovar_page() {
  to_cart_button = await document.querySelector(to_cart_button_selector)
  await to_cart_button.click()

  cart_icon = await document.querySelector(cart_icon_selector)
  await cart_icon.click()
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

  await tovar_page()

  await cart_page()

  await checkout_page()

  await assert_page(time)
  }

run()

// Стартовать с главной страницы!!!
// Добавить проверку заказа через API https://api-docs.ecwid.com/reference/get-order
// Исправить названия на CamelCase

