import { By, Key, Builder, until } from "selenium-webdriver";
import "chromedriver";
import "geckodriver";


async function example() {
    var searchString = "Automation testing with Selenium and JavaScript";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://google.com");
        
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

    var title = await driver.getTitle();
    console.log('Title is:', title);

    await driver.quit();
}

example()

