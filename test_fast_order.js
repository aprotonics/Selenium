search_button_selector = '#static-html a.footer__link--all-products'
filters_selector = '.ec-filters__wrap .ec-filter--offers .form-control__inline-label'
product_prices_selector = '.grid__products .grid-product .grid-product__price-value'
cart_button_span_selector = '.details-product-purchase__add-buttons .form-control:last-child button.form-control__button span.form-control__button-text'
cart_button_selector = '.details-product-purchase__add-buttons .form-control:last-child button.form-control__button'
cart_span_selector = '.details-product-purchase__add-buttons .form-control:last-child button.form-control__button span.form-control__button-text'
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

timeInterval = 50


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
  let search_button
  let timeSearchButton


  timeSearchButton = setInterval(findSearchButton, timeInterval)

  function findSearchButton() {
    search_button = document.querySelector(search_button_selector)
    if (search_button) {
      clearInterval(timeSearchButton)
      clickSearchButton()
    }
  }

  function clickSearchButton() {
    search_button.click()
  }

}

function search_page() {
  let filters
  let product_prices
  let product_price
  let timerFilters
  let timerProductPrices


  timerFilters = setInterval(findFilters, timeInterval)

  function findFilters() {
    filters = document.querySelector(filters_selector)
    if (filters) {
      clearInterval(timerFilters)
      timerProductPrices = setInterval(findProductPrice, timeInterval)
    }
  }

  function findProductPrice() {  
    product_prices = document.querySelectorAll(product_prices_selector)
    if (product_prices) {
      clearInterval(timerProductPrices)

      for (i = 0; i < product_prices.length; i++) {
        price = parseFloat(product_prices[i].textContent.split("$")[1])
        if (price == 0.00) {
          product_price = product_prices[i]
          break
        } 
      }
      clickProduct()
    }
  }

  function clickProduct() {
    product_price.click()
  }

}

function product_page() {
  let cart_span
  let cart_button
  let cart_icon
  let timerCartSpan
  let timerCartButton
  let timerCartIcon


  timerCartSpan = setInterval(findCartSpan, timeInterval)

  function findCartSpan() {
    cart_span = document.querySelector(cart_span_selector)
    if (cart_span) {
      clearInterval(timerCartSpan)
      timerCartButton = setInterval(findCartButton, timeInterval)
    }
  }

  function findCartButton() {
    cart_button = document.querySelector(cart_button_selector)
    if (cart_button) {
      clearInterval(timerCartButton)
      clickCartButton()
      timerCartIcon = setInterval(findCartIcon, timeInterval)
    }
  }

  function clickCartButton() {
    cart_button.click()
  }

  function findCartIcon() {
    cart_icon = document.querySelector(cart_icon_selector)
    if (cart_icon) {
      clearInterval(timerCartIcon)
      clickCartIcon()
    }
  }

  function clickCartIcon() {
    cart_icon.click()
  }
  
}

function cart_page() {
  let email_input
  let checkbox_agree
  let place_order_button
  let timerEmailInput
  let timerCheckboxAgree
  let timerPlaceOrderButon


  timerEmailInput = setInterval(findEmailInput, timeInterval);

  function findEmailInput() {
    email_input = document.querySelector(email_input_selector)
    if (email_input) {
      clearInterval(timerEmailInput)
      fillEmailInput()
      timerCheckboxAgree = setInterval(findCheckboxAgree, timeInterval);
    }
  }

  function fillEmailInput() {
    fillInput(email_input, 'test@mail.ru')
  }

  function findCheckboxAgree() {
    checkbox_agree = document.querySelector(checkbox_agree_selector)
    if (checkbox_agree) {
      clearInterval(timerCheckboxAgree)
      checkCheckboxAgree()
      timerPlaceOrderButon = setInterval(findPlaceOrderButton, timeInterval);
    }
  }

  function checkCheckboxAgree() {
    checkbox_agree.click()
  }

  function findPlaceOrderButton() {
    place_order_button = document.querySelector(place_order_button_selector)
    if (place_order_button) {
      clearInterval(timerPlaceOrderButon)
      clickPlaceOrderButton()
    }
  }

  function clickPlaceOrderButton() {
    place_order_button.click()
  }

}

function checkout_page() {
  let name_input
  let address_input
  let city_input
  let postal_input
  let place_order_button
  let timerNameInput
  let timerAddressInput
  let timerCityInput
  let timerPostalInput
  let timerPlaceOrderButon


  timerNameInput = setInterval(findNameInput, timeInterval)

  function findNameInput() {
    name_input = document.querySelector(name_input_selector)
    if (name_input) {
      clearInterval(timerNameInput)
      fillNameInput()
      timerAddressInput = setInterval(findAddressInput, timeInterval)
    }
  }

  function fillNameInput() {
    fillInput(name_input, 'test')
  }

  function findAddressInput() {
    address_input = document.querySelector(address_input_selector)
    if (address_input) {
      clearInterval(timerAddressInput)
      fillAddressInput()
      timerCityInput = setInterval(findCityInput, timeInterval)
    }
  }

  function fillAddressInput() {
    fillInput(address_input, 'test')
  }

  function findCityInput() {
    city_input = document.querySelector(city_input_selector)
    if (city_input) {
      clearInterval(timerCityInput)
      fillCityInput()
      timerPostalInput = setInterval(findPostalInput, timeInterval)
    }
  }

  function fillCityInput() {
    fillInput(city_input, 'test')
  }

  function findPostalInput() {
    postal_input = document.querySelector(postal_input_selector)
    if (postal_input) {
      clearInterval(timerPostalInput)
      fillPostalInput()
      timerPlaceOrderButon = setInterval(findPlaceOrderButton, timeInterval)
    }
  }

  function fillPostalInput() {
    fillInput(postal_input, '100000')
  }

  function findPlaceOrderButton() {
    place_order_button = document.querySelector(place_order_button2_selector)
    if (place_order_button) {
      clearInterval(timerPlaceOrderButon)
      clickPlaceOrderButton()
    }
  }

  function clickPlaceOrderButton() {
    place_order_button.click()
  }

}

function assert_page(time) {
  let thanks_block
  let thanks_text
  let timerThanksBlock


  timerThanksBlock = setInterval(findThanksBlock, timeInterval, time)

  function findThanksBlock(time) {
    thanks_block = document.querySelector(thanks_block_selector)
    if (thanks_block) {
      clearInterval(timerThanksBlock)
      makeAssertion(time)
    }
  }
  
  function makeAssertion(time) {
    thanks_text = thanks_block.textContent
    
    let result_message = 'Test passed!'
    try {
      chai.assert.include(thanks_text, 'Спасибо за заказ')
    }
    catch(error) {
      result_message = 'Test failed!'
    }
    finally {
      console.log(result_message)
    }

    time = performance.now() - time;
    console.log('Время выполнения = ', time, ' мс');
  }

}

async function run() {
  let time = performance.now()
  
  let scriptUrl = 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js'
  loadScript(scriptUrl)

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

