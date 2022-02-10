import time

import unittest
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.chrome.service import Service
from webdriver_manager.firefox import GeckoDriverManager
from webdriver_manager.chrome import ChromeDriverManager

# For Chromium
from webdriver_manager.utils import ChromeType

from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys


URL = "https://buy-in-10-seconds.company.site/search"


titles_fields_selector = 'div.grid__products > div div.grid-product__title-inner'
prices_fields_selector = 'div.grid-product__price-value'
product_sort_selector = '#ec-products-sort'


# @unittest.skip
class TestFilterChrome(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        # options.add_argument("--headless")
        options.add_argument('--ignore-certificate-errors')
        options.add_argument("--remote-debugging-port=9222")

        # For Chrome
        # service=Service(ChromeDriverManager().install())

        # For Chromium
        service=Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())

        driver = webdriver.Chrome(service=service, options=options)

        # driver.maximize_window()
        driver.get(URL)
        driver.implicitly_wait(5)
        self.driver = driver

    def test_sort_title(self):
        driver = self.driver
        
        # create an array of names
        titles_fields = driver.find_elements(By.CSS_SELECTOR, titles_fields_selector)
        titles = []
        for title_field in titles_fields:
            title = title_field.text
            titles.append(title)
        titles_sorted = titles.copy()
        titles_sorted.sort()

        # sort products
        product_sort = Select(driver.find_element(By.CSS_SELECTOR, product_sort_selector)) 
        product_sort.select_by_value('nameAsc')

        time.sleep(1)

        # create a new array of names and compare arrays
        titles_fields_new = driver.find_elements(By.CSS_SELECTOR, titles_fields_selector)
        titles_new = []
        for title_field in titles_fields_new:
            title = title_field.text
            titles_new.append(title)

        self.assertEqual(titles_new, titles_sorted)
    
    def test_sort_price(self):
        driver = self.driver
        
        # create an array of names
        prices_fields = driver.find_elements(By.CSS_SELECTOR, prices_fields_selector)
        prices = []
        for price_field in prices_fields:
            price = float(price_field.text.split('$')[1])
            prices.append(price)
        prices_sorted = prices.copy()
        prices_sorted.sort()

        # sort products
        product_sort = Select(driver.find_element(By.CSS_SELECTOR, product_sort_selector)) 
        product_sort.select_by_value('priceAsc')

        time.sleep(1)

        # create a new array of names and compare arrays
        prices_fields_new = driver.find_elements(By.CSS_SELECTOR, prices_fields_selector)
        prices_new = []
        for price_field in prices_fields_new:
            price = float(price_field.text.split('$')[1])
            prices_new.append(price)

        self.assertEqual(prices_new, prices_sorted)

    def tearDown(self):
        self.driver.quit()

@unittest.skip
class TestFilterFirefox(unittest.TestCase):
    def setUp(self):
        options = webdriver.FirefoxOptions()
        options.add_argument("--start-maximized")
        # options.add_argument("--headless")
        options.add_argument('--ignore-certificate-errors')

        service=Service(GeckoDriverManager().install())

        driver = webdriver.Firefox(service=service, options=options)

        driver.maximize_window()
        driver.get(URL)
        driver.implicitly_wait(10)
        self.driver = driver

    def test_sort_title(self):
        driver = self.driver
        
        # create an array of names
        titles_fields = driver.find_elements(By.CSS_SELECTOR, titles_fields_selector)
        titles = []
        for title_field in titles_fields:
            title = title_field.text
            titles.append(title)
        titles_sorted = titles.copy()
        titles_sorted.sort()

        # sort products
        product_sort = Select(driver.find_element(By.CSS_SELECTOR, product_sort_selector)) 
        product_sort.select_by_value('nameAsc')

        time.sleep(1)

        # create a new array of names and compare arrays
        titles_fields_new = driver.find_elements(By.CSS_SELECTOR, titles_fields_selector)
        titles_new = []
        for title_field in titles_fields_new:
            title = title_field.text
            titles_new.append(title)

        self.assertEqual(titles_new, titles_sorted)
    
    def test_sort_price(self):
        driver = self.driver
        
        # create an array of names
        prices_fields = driver.find_elements(By.CSS_SELECTOR, prices_fields_selector)
        prices = []
        for price_field in prices_fields:
            price = float(price_field.text.split('$')[1])
            prices.append(price)
        prices_sorted = prices.copy()
        prices_sorted.sort()

        # sort products
        product_sort = Select(driver.find_element(By.CSS_SELECTOR, product_sort_selector)) 
        product_sort.select_by_value('priceAsc')

        time.sleep(1)

        # create a new array of names and compare arrays
        prices_fields_new = driver.find_elements(By.CSS_SELECTOR, prices_fields_selector)
        prices_new = []
        for price_field in prices_fields_new:
            price = float(price_field.text.split('$')[1])
            prices_new.append(price)

        self.assertEqual(prices_new, prices_sorted)

    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
