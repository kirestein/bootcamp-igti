package for_while_dowhile;

public class Aula_for {

	public static void main(String[] args) {
		
		//for (inicialização; condição; incremento)
		
		int i = 0, j = 0;
		
		for (i = 1; i <= 10; i++) {
			System.out.printf("Tabuada do %d \n", i);
			for (j = 1; j <= 10; j++) {
				System.out.printf("%d x %d = %d. \n", i, j, i*j);
			}
		}

	}

}
