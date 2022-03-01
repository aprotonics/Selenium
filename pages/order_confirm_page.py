from .base_page import BasePage
from .locators import *


class OrderConfirmPage(BasePage):
    def __init__(self, *args, **kwargs) -> None:
        super(OrderConfirmPage, self).__init__(*args, **kwargs)

    def should_be_thanks_for_order_text(self):
        thanksBlock = self.driver.find_element(*thanksBlockSelector)
        thanksText = thanksBlock.text

        assert 'Спасибо за заказ' in thanksText