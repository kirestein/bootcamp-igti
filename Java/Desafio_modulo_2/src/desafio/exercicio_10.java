package desafio;
import java.util.*;
public class exercicio_10 {

	public static void main(String[] args) {
		int contador = 0;
		int i = 0, j = 0;
		for (i = 1; i <= 100; i++) {
			contador = 0;
			for (j = i; j > 0; j--) {
				if (i % j == 0)
					contador++;

	}
	if (contador == 2)
		System.out.printf("%d \n", i);
		}
	}
}
