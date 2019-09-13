package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
public class LoginStepDef {
	
	
	WebDriver driver=null;
	@Given("^User already available on CRM Home Page$")
	public void user_already_available_on_CRM_Home_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C://Avinash//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		driver.manage().window().maximize();

	}

	@SuppressWarnings("deprecation")
	@When("^Title of page is verified$")
	public void title_of_page_is_verified() throws Throwable {
	   String title=driver.getTitle();
	   Assert.assertEquals("CRM", title);
	   
	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		driver.findElement(By.name("email")).sendKeys("avirocks701@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Crm@1234");
	    
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();

	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		String title=driver.getTitle();
		driver.quit();
	    Assert.assertEquals("CRM", title);
	 
	}

}
