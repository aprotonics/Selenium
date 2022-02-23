import time

from .search_page import SearchPage
from .locators import *

from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class SortPage(SearchPage):
    def __init__(self, *args, **kwargs) -> None:
        super(SortPage, self).__init__(*args, **kwargs)

    def sort_by_title(self):
        WebDriverWait(self.driver, 40).until(
            EC.visibility_of_element_located(filters_selector))

        products_titles_array = self.create_array_of_titles()
        self.products_titles_sorted_array = products_titles_array.copy()
        self.products_titles_sorted_array.sort()

        product_sort = Select(self.driver.find_element(*product_sort_selector)) 
        product_sort.select_by_value('nameAsc')

        time.sleep(1)

        self.products_titles_new_array = self.create_array_of_titles()

    def sort_by_price(self):
        WebDriverWait(self.driver, 40).until(
            EC.visibility_of_element_located(filters_selector))

        products_prices_array = self.create_array_of_prices()
        self.products_prices_sorted_array = products_prices_array.copy()
        self.products_prices_sorted_array.sort()

        product_sort = Select(self.driver.find_element(*product_sort_selector)) 
        product_sort.select_by_value('priceAsc')

        time.sleep(1)

        self.products_prices_new_array = self.create_array_of_prices()

    def check_sort_by_title(self):
        assert self.products_titles_new_array == self.products_titles_sorted_array,\
        f'new array {self.products_titles_new_array} не равно sorted array {self.products_titles_sorted_array}'

    def check_sort_by_price(self):
        assert self.products_prices_new_array == self.products_prices_sorted_array,\
        f'new array {self.products_prices_new_array} не равно sorted array {self.products_prices_sorted_array}'

    def create_array_of_titles(self):
        products_titles = self.driver.find_elements(*products_titles_selector)
        products_titles_array = []
        for product_title in products_titles:
            title = product_title.text
            products_titles_array.append(title)
        return products_titles_array

    def create_array_of_prices(self):
        products_prices = self.driver.find_elements(*products_prices_selector)
        products_prices_array = []
        for product_price in products_prices:
            price = float(product_price.text[1:])
            products_prices_array.append(price)
        return products_prices_array
