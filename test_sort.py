


URL = "https://buy-in-10-seconds.company.site/search"


titles_fields_selector = 'div.grid__products > div div.grid-product__title-inner'
prices_fields_selector = 'div.grid-product__price-value'
product_sort_selector = '#ec-products-sort'


class TestSort():
    def test_sort_by_title(self, driver):
        page = SortPage(driver, URL)
        page.open()
        page.sort_by_title()
        page.check_filter_by_title()

    def test_sort_by_price(self, driver):
        page = SortPage(driver, URL)
        page.open()
        page.sort_by_price()
        page.check_filter_by_price()
