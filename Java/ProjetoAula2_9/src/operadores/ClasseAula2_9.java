package operadores;
import java.math.*;

public class ClasseAula2_9 {

	public static void main(String[] args) {
		//x^2 + 12x - 13 = 0
		//2x^2 - 15x - 18 = 0
		
		int a = 0, b = 0, c = 0;
		a = 2;
		b = -15;
		c = -18;
		
		double delta = 0;
		delta = (b * b) - (4 * a * c);
		System.out.printf("O valor do delta é %.0f. \n", delta);
		
		double raizDeDelta = Math.sqrt(delta);
		
		double x1 = 0, x2 = 0;
		x1 = ((-b) - Math.sqrt(delta)) / 2;
		x2 = ((-b) + Math.sqrt(delta)) / 2;
		
		System.out.printf("O valor da raiz de delta é %.2f \n", raizDeDelta);
		System.out.printf("O valor de x' é %.2f e o valor de x'' é %.2f \n" , x1, x2);

	}

}
