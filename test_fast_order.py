from pages.main_page import MainPage
from pages.search_page import SearchPage
from pages.product_page import ProductPage
from pages.cart_page import CartPage
from pages.checkout_page import CheckoutPage
from pages.order_confirm_page import OrderConfirmPage


URL = "https://buy-in-10-seconds.company.site/"


class TestFastOrder():
    def test_fast_order(self, driver):
        main_page = MainPage(driver, URL)
        main_page.open()
        main_page.go_to_search_page()

        search_page = SearchPage(driver, URL)
        search_page.find_product()
        search_page.go_to_product_page()

        product_page = ProductPage(driver, URL)
        product_page.add_product_to_cart()
        product_page.go_to_cart_page()

        cart_page = CartPage(driver, URL)
        cart_page.fill_inputs()
        cart_page.go_to_checkout_page()

        checkout_page = CheckoutPage(driver, URL)
        checkout_page.fill_inputs()
        checkout_page.go_to_order_confirm_page()

        order_confirm_page = OrderConfirmPage(driver, URL)
        order_confirm_page.should_be_thanks_for_order_text()
   