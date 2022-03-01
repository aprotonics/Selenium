from .base_page import BasePage
from .locators import *


class ProductPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(ProductPage, self).__init__(*args, **kwargs)

    def add_product_to_cart(self):
        cart_span = self.driver.find_element(*cartSpanSelector)
        cart_button = self.driver.find_element(*cartButtonSelector)
        cart_button.click()
    
    def go_to_cart_page(self):
        cart_icon = self.driver.find_element(*cartIconSelector)
        cart_icon.click()