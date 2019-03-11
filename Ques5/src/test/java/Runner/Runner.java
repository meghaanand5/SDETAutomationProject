package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false,
        monochrome = true,
        plugin = { "pretty","html:target/cucumber" },
        features = "src/test/resources/Features",
        glue = {"stepdef","Stepdef.java"},
		tags = {"@Test"}

		)
public class Runner
{
	
}