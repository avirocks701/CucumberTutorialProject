package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
	@CucumberOptions(
			features = ".\\src\\main\\java\\features\\login.feature", //the path of the feature files
			glue={"stepDefinitions"}, //the path of the step definition files
			format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
			dryRun=false,
			monochrome= true,
			strict = true
			)
public class Runner {

}
