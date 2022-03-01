from .base_page import BasePage
from .locators import *


class CartPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(CartPage, self).__init__(*args, **kwargs)

        self.emailInputValue = 'test@mail.ru'

    def fill_inputs(self):
        email_input = self.driver.find_element(*emailInputSelector)
        email_input.send_keys(self.emailInputValue)

        checkbox_agree = self.driver.find_element(*checkboxAgreeSelector)
        checkbox_agree.click()

    def go_to_checkout_page(self):
        place_order_button = self.driver.find_element(*placeOrderButtonSelector)
        place_order_button.click() 

    