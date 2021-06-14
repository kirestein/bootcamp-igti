package aula3_7;
import java.util.Scanner;
public class Switch {

	public static void main(String[] args) {
		char operacao = ' ';
		Scanner entrada = new Scanner(System.in);
		double n1 = 0, n2 = 0, total = 0;
		
		System.out.println("Digite o primeiro valor: ");
		n1 = entrada.nextDouble();
		
		System.out.println("Digite o segundo valor: ");
		n2 = entrada.nextDouble();
		
		entrada.nextLine();
		
		System.out.println("Digite a operação desejada (+, -, *, /, %): ");
		operacao = entrada.nextLine().charAt(0);
		
		switch (operacao) {
			case '+':
				total = n1 + n2;
				break;
			case '-':
				total = n1 - n2;
				break;
			case '*':
				total = n1 * n2;
				break;
			case '/':
				total = n1 / n2;
				break;
			case '%':
				total = n1 % n2;
				break;
			default:
				System.out.println("Operação desconhecida pelo sistema.");
		}
		if (operacao == '+' || operacao == '-' || operacao == '*' || operacao == '/' || operacao == '%')
			System.out.printf("%.2f %c %.2f = %.2f", n1, operacao, n2, total);

	}

}
