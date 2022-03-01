from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from .base_page import BasePage
from .locators import *


class SearchPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(SearchPage, self).__init__(*args, **kwargs)

        self.product_price = None
    
    def find_product(self):
        filters = self.driver.find_elements(*filtersSelector)
        product_prices = self.driver.find_elements(*productPricesSelector)
        for price in product_prices:
            price_value = float(price.text.split('$')[1])
            if price_value == 0:
                self.product_price = price
                    
    def go_to_product_page(self):
        self.product_price.click()