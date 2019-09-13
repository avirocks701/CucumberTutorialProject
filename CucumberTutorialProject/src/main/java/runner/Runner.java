package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
	@CucumberOptions(
			features = ".\\src\\main\\java\\features\\login.feature", //the path of the feature files
			glue={"stepDefinitions"}, //the path of the step definition files
			format= {"pretty","html:test-output"},
			dryRun=true,
			monochrome= true
			)
public class Runner {

}
