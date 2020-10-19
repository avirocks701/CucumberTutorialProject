package CucumberTutorialProject.CucumberTutorialProject;

import cucumber.api.cli.Main;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     * @throws Throwable 
     */
    public AppTest( String testName ) throws Throwable
    {
        super( testName );
        String [] argv = new String[]{ "-g","",".\\src\\main\\java\\features\\login.feature"};
        ClassLoader contextClassLoader = Thread.currentThread().getContextClassLoader();
        byte exitstatus = Main.run(argv, contextClassLoader);

    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        assertTrue( true );
    }
}
