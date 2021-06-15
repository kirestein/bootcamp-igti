package for_while_dowhile;

import java.util.Scanner;

public class Aula_while {

	public static void main(String[] args) {
		char saida = 'N';
		
		Scanner entrada = new Scanner(System.in);
		
		while (saida != 'S') {
			System.out.println("Gostaria de continuar? (S - Sim / N - Não ");
			saida = entrada.nextLine().charAt(0);
		}

	}

}
