package projetos;
import java.util.Scanner;
public class PrimeiroPrograma {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		double n1 = 0, n2 = 0, n3 = 2, resultado;
		System.out.println("Digite o valor para a vari?vel n1: ");
		n1 = entrada.nextDouble();
		
		System.out.println("Digite o valor para a vari?vel n2: ");
		n2 = entrada.nextDouble();
		
		resultado = n1 * n2 / n3;
		//System.out.printf("As vari?veis n1 e n2 tem valor: %.2f e %.2f respecitivamente \n", n1, n2);
		System.out.printf("O valor total ?: %.2f.", resultado);

	}

}
