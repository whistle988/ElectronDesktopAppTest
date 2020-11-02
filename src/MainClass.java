import java.io.IOException;

public class MainClass {
   public static void main(String args[]) throws IOException {
      int i = 0;
      while (i++ < 100) {
    	  if ((i % 3 == 0) && (i % 5 == 0))
    		  System.out.println("FizzBuzz");
    	  else if (i % 3 == 0)
    		  System.out.println("Fizz");
    	  else if (i % 5 == 0)
              System.out.println("Buzz");
          else
              System.out.println(i);
    	  System.out.flush();
   }
}
   
}