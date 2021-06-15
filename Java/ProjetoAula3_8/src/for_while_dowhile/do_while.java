package for_while_dowhile;

import java.util.Scanner;

public class do_while {
	
	public static void main(String[] args) {
		
		char continuar = ' ';
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Deseja continuar? (s = sim / n = não)");
		continuar = entrada.nextLine().charAt(0);
		
		/*while (continuar == 's') {
			System.out.println("Mensagem");
			System.out.println("Deseja continuar? (s = sim / n = não)");
			continuar = entrada.nextLine().charAt(0);
		}*/
		do {
			System.out.println("Mensagem");
		} while (continuar == 's');
		
		System.out.println("Fim do programa!");
		
	}
	

}
