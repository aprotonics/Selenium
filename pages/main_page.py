from .base_page import BasePage
from .locators import *


class MainPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(MainPage, self).__init__(*args, **kwargs)

    def go_to_search_page(self):
        search_button = self.driver.find_element(*search_button_selector)
        search_button.click()