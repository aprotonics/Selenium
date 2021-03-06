from selenium.webdriver.common.by import By


# Filter page
products_general_selector = (By.XPATH, '//div[contains(@class, "grid__product")]/div')
products_prices_selector = (By.XPATH, '//*[contains(@class, "ec-price-item")]')
low_price_selector = (By.XPATH, '(//div[contains(@class, "ec-filter__price-wrap")]//input)[1]')
high_price_selector = (By.XPATH, '(//div[contains(@class, "ec-filter__price-wrap")]//input)[2]')
filters_count_selector = (By.XPATH, '//*[contains(@class, "ec-filters__applied-count")]')
products_container_selector = (By.XPATH, '//div[contains(@class, "grid__products")]')
first_product_selector = (By.XPATH, '//div[contains(@class, "grid__product")]/div[1]')
products_filtered_selector = (By.XPATH, '//div[contains(@class, "grid__product")]/div')
products_names_selelctor = (By.XPATH, '//div[contains(@class, "grid-product__title-inner")]')
filter_by_in_stock_checkbox_selector = (By.XPATH, '//*[@id="checkbox-in_stock"]')
filter_by_discount_checkbox_selector = (By.XPATH, '//*[@id="checkbox-on_sale"]')

# Sort page
filters_selector = (By.XPATH, '//div[contains(@class, "ec-filter--search")]')
products_titles_selector = (By.XPATH, '//div[contains(@class, "grid-product__title-inner")]')
products_prices_selector = (By.XPATH, '//div[contains(@class, "grid-product__price-value")]')
product_sort_selector = (By.XPATH, '//*[@id="ec-products-sort"]')

# Main page
search_button_selector = (By.CSS_SELECTOR, '#static-html a.footer__link--all-products')

# Search page
filters_selector = (By.CSS_SELECTOR, '.ec-filters__wrap .ec-filter--offers .form-control__inline-label')
product_prices_selector = (By.CSS_SELECTOR, '.grid__products .grid-product .grid-product__price-value')

# Product page
cart_button_selector = (By.CSS_SELECTOR, '.details-product-purchase__add-buttons .form-control:last-child button.form-control__button')
cart_span_selector = (By.CSS_SELECTOR, '.details-product-purchase__add-buttons .form-control:last-child button.form-control__button span.form-control__button-text')
cart_icon_selector = (By.CSS_SELECTOR, '.float-icons__icon--cart > .ec-cart-widget > .ec-minicart')

# Cart page
email_input_selector = (By.CSS_SELECTOR, '#ec-cart-email-input')
checkbox_agree_selector = (By.CSS_SELECTOR, '#form-control__checkbox--agree')
place_order_button_selector = (By.CSS_SELECTOR, '.form-control__button > .form-control__loader')

# Checkout page
name_input_selector = (By.CSS_SELECTOR, '#ec-full-name')
address_input_selector = (By.CSS_SELECTOR, '#ec-address-line1')
city_input_selector = (By.CSS_SELECTOR, '#ec-city-list')
postal_input_selector = (By.CSS_SELECTOR, '#ec-postal-code')
place_order_button2_selector = (By.CSS_SELECTOR, '.form-control__button > .form-control__loader')

# Order confirm page
thanks_block_selector = (By.CSS_SELECTOR, 'div.ec-store__confirmation-page h1.page-title__name')
