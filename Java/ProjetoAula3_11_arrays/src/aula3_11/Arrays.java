package aula3_11;
import java.util.Scanner;
public class Arrays {

	public static void main(String[] args) {
		
		//tipo[] nome = new tipo[tamanho];
		
		int[] numeros = new int[5];
		int total = 0, i = 0;
		String resultado = null;
		String[] impressao;
		String numero = null;
		Scanner entrada = new Scanner(System.in);
		
		for (i = 0; i < 5; i++) {
			System.out.printf("Digite o %d? n?mero: ", i+1);
		numeros[i] = entrada.nextInt();
		total += numeros[i];
		numero = Integer.toString(numeros[i]);
		resultado = Integer.toString(total);
		impressao = numero.split(";");
		}
		
		
		System.out.println(numero);
		
		
		

	}

}
