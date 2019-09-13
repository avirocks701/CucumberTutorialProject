package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewContactStepDef {
	
	WebDriver driver=null;
	@Given("^User is navigated to home page$")
	public void user_is_navigated_to_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C://Avinash//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.name("email")).sendKeys("avirocks701@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Crm@1234");
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
	
	    
	}

	@When("^User navigates on contact screen$")
	public void user_navigates_on_contact_screen() throws Throwable {
	   driver.findElement(By.xpath("//*[@id=\"main-nav\"]/a[3]/span")).click();
	   
	}

	@Then("^User clicks on New button$")
	public void user_clicks_on_New_button() throws Throwable {
	    driver.findElement(By.linkText("New")).click();
	    
	}

	@Then("^User enters firstName and LastName$")
	public void user_enters_firstName_and_LastName() throws Throwable {
	    driver.findElement(By.name("first_name")).sendKeys("Fname");
	    driver.findElement(By.name("last_name")).sendKeys("LName");
	    
	}

	
	  @Then("^User Clicks on save button$") public void
	  user_Clicks_on_save_button() throws Throwable { driver.findElement(By.xpath(
	  "//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();
	  driver.findElement(By.xpath("//*[@id=\"main-nav\"]/a[3]/span")).click();
	  
	  }
	 


}
