package for_while_dowhile;

import java.util.Scanner;

public class Aula_while {

	public static void main(String[] args) {
		char saida = 'N';
		int numero = 0, somatorio = 0;
		
		Scanner entrada = new Scanner(System.in);
		
		while (saida != 'S') {
			System.out.println("Digite um número: ");
			numero = entrada.nextInt();
			entrada.nextLine();
			System.out.println("Gostaria de sair? (S - Sim / N - Não)");
			saida = entrada.nextLine().charAt(0);
			somatorio += numero;
			System.out.printf("O somatório é igual a: %d \n", somatorio);
		}
		System.out.printf("O somatório é igual a: %d", somatorio);
	}

}
