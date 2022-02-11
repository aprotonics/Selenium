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
thanks_for_order_block_selector = 'div.ec-store__confirmation-page h1.page-title__name'


async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
}


async function tovar_page() {
  to_cart_button = await document.querySelector(to_cart_button_selector)
  await to_cart_button.click()

  cart_icon = await document.querySelector(cart_icon_selector)
  await cart_icon.click()
}


async function cart_page() {
  email_input = await document.querySelector(email_input_selector)
  email_input.value = 'test@mail.ru';
  await email_input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await email_input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await email_input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await email_input.dispatchEvent(new Event('input', { bubbles: true }));
  await email_input.dispatchEvent(new Event('change', { bubbles: true })); 

  checkbox_agree = await document.querySelector(checkbox_agree_selector)
  await checkbox_agree.click()

  let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });

  let result = await promise

  place_order_button = await document.querySelector(place_order_button_selector)
  await place_order_button.click()
}


async function checkout_page() {
  name_input = await document.querySelector(name_input_selector)
  name_input.value = 'test'
  await name_input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await name_input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await name_input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await name_input.dispatchEvent(new Event('input', { bubbles: true }));
  await name_input.dispatchEvent(new Event('change', { bubbles: true })); 

  address_input = await document.querySelector(address_input_selector)
  address_input.value = 'test'
  await address_input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await address_input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await address_input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await address_input.dispatchEvent(new Event('input', { bubbles: true }));
  await address_input.dispatchEvent(new Event('change', { bubbles: true })); 

  city_input = await document.querySelector(city_input_selector)
  city_input.value = 'test'
  await city_input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await city_input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await city_input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await city_input.dispatchEvent(new Event('input', { bubbles: true }));
  await city_input.dispatchEvent(new Event('change', { bubbles: true })); 

  postal_input = await document.querySelector(postal_input_selector)
  postal_input.value = '100000'
  await postal_input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  await postal_input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
  await postal_input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
  await postal_input.dispatchEvent(new Event('input', { bubbles: true }));
  await postal_input.dispatchEvent(new Event('change', { bubbles: true })); 

  let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });

  let result = await promise

  place_order_button2 = await document.querySelector(place_order_button2_selector)
  await place_order_button2.click()
}


async function assert_page() {
  thanks_for_order_block = await document.querySelector(thanks_for_order_block_selector)
  thanks_for_order_text = thanks_for_order_block.textContent

  let scriptUrl1 = 'https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js'
  let scriptUrl2 = 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js'
  await loadScript(scriptUrl1);
  await loadScript(scriptUrl2);

  let assert = await chai.assert
  await mocha.setup('bdd')

  await assert.include(thanks_for_order_text, 'Спасибо за заказ')

  await mocha.run()

  await console.log("OK")
}


async function run() {
  let time = performance.now();

  await tovar_page()

  let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });

  let result = await promise

  await cart_page()

  let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });

  let result2 = await promise2

  await checkout_page()

  let promise3 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1500)
    });

  let result3 = await promise3

  await assert_page()

  time = performance.now() - time;
  console.log('Время выполнения = ', time, ' мс');
  }

run()

// Заменить setTimeout на асинхронность!!!



