from .base_page import BasePage
from .locators import *


class CheckoutPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(CheckoutPage, self).__init__(*args, **kwargs)
        
        self.nameInputValue = 'test'
        self.addressInputValue = 'test'
        self.cityInputValue = 'test'
        self.postalInputValue = '100000'

    def fill_inputs(self):
        nameInput = self.driver.find_element(*nameInputSelector)
        nameInput.send_keys(self.nameInputValue)

        addressInput = self.driver.find_element(*addressInputSelector)
        addressInput.send_keys(self.addressInputValue)

        cityInput = self.driver.find_element(*cityInputSelector)
        cityInput.send_keys(self.cityInputValue)

        postalInput = self.driver.find_element(*postalInputSelector)
        postalInput.send_keys(self.postalInputValue)

    def go_to_order_confirm_page(self):
        placeOrderButton2 = self.driver.find_element(*placeOrderButton2Selector)
        placeOrderButton2.click()
