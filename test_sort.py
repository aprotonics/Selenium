from pages.sort_page import SortPage


URL = "https://buy-in-10-seconds.company.site/search"


class TestSort():
    def test_sort_by_title(self, driver):
        page = SortPage(driver, URL)
        page.open()
        page.sort_by_title()
        page.check_sort_by_title()

    def test_sort_by_price(self, driver):
        page = SortPage(driver, URL)
        page.open()
        page.sort_by_price()
        page.check_sort_by_price()
