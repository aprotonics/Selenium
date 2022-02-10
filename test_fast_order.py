import unittest
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.chrome.service import Service
from webdriver_manager.firefox import GeckoDriverManager
from webdriver_manager.chrome import ChromeDriverManager

# For Chromium
from webdriver_manager.utils import ChromeType

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys


URL = "https://buy-in-10-seconds.company.site/Tovar-1-p351702553"


to_cart_button_selector = '.details-product-purchase__add-buttons > div:nth-child(2) > button.form-control__button'
cart_icon_selector = '.float-icons__icon--cart > .ec-cart-widget > .ec-minicart'
email_input_selector = 'ec-cart-email-input'
checkbox_agree_selector = 'form-control__checkbox--agree'
place_order_button_selector = '.form-control__button > .form-control__loader'
name_input_selector = 'ec-full-name'
address_input_selector = 'ec-address-line1'
city_input_selector = 'ec-city-list'
postal_input_selector = 'ec-postal-code'
place_order_button2_selector = '.form-control__button > .form-control__loader'
thanks_for_order_block_selector = 'div.ec-store__confirmation-page h1.page-title__name'


# @unittest.skip
class TestFilterChrome(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        options.add_argument("--headless")
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

    def test_fast_order(self):
        driver = self.driver

        to_cart_button = driver.find_element(By.CSS_SELECTOR, to_cart_button_selector)
        to_cart_button.click()

        cart_icon = driver.find_element(By.CSS_SELECTOR, cart_icon_selector)
        cart_icon.click()

        email_input = driver.find_element(By.ID, email_input_selector)
        email_input.send_keys('test@mail.ru')

        checkbox_agree = driver.find_element(By.ID, checkbox_agree_selector)
        checkbox_agree.click()

        place_order_button = driver.find_element(By.CSS_SELECTOR, place_order_button_selector)
        place_order_button.click()

        name_input = driver.find_element(By.ID, name_input_selector)
        name_input.send_keys('test')

        address_input = driver.find_element(By.ID, address_input_selector)
        address_input.send_keys('test')

        city_input = driver.find_element(By.ID, city_input_selector)
        city_input.send_keys('test')

        postal_input = driver.find_element(By.ID, postal_input_selector)
        postal_input.send_keys('100000')

        place_order_button2 = driver.find_element(By.CSS_SELECTOR, place_order_button2_selector)
        place_order_button2.click()

        thanks_for_order_block = driver.find_element(By.CSS_SELECTOR, thanks_for_order_block_selector)
        thanks_for_order_text = thanks_for_order_block.text
        self.assertRegex(thanks_for_order_text, 'Спасибо за заказ')

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

    def test_fast_order(self):
        driver = self.driver

        to_cart_button = driver.find_element(By.CSS_SELECTOR, to_cart_button_selector)
        to_cart_button.click()

        cart_icon = driver.find_element(By.CSS_SELECTOR, cart_icon_selector)
        cart_icon.click()

        email_input = driver.find_element(By.ID, email_input_selector)
        email_input.send_keys('test@mail.ru')

        checkbox_agree = driver.find_element(By.ID, checkbox_agree_selector)
        checkbox_agree.click()

        place_order_button = driver.find_element(By.CSS_SELECTOR, place_order_button_selector)
        place_order_button.click()

        name_input = driver.find_element(By.ID, name_input_selector)
        name_input.send_keys('test')

        address_input = driver.find_element(By.ID, address_input_selector)
        address_input.send_keys('test')

        city_input = driver.find_element(By.ID, city_input_selector)
        city_input.send_keys('test')

        postal_input = driver.find_element(By.ID, postal_input_selector)
        postal_input.send_keys('100000')

        place_order_button2 = driver.find_element(By.CSS_SELECTOR, place_order_button2_selector)
        place_order_button2.click()

        thanks_for_order_block = driver.find_element(By.CSS_SELECTOR, thanks_for_order_block_selector)
        thanks_for_order_text = thanks_for_order_block.text
        self.assertRegex(thanks_for_order_text, 'Спасибо за заказ')

    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
