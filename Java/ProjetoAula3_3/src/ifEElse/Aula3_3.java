package ifEElse;
import java.math.*;
import java.util.*;
public class Aula3_3 {

	public static void main(String[] args) {
		double nota1 = 0, nota2 = 0, nota3 = 0, total = 0, media = 0, frequencia;
		String situacao = "";
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Digite a primeira nota: ");
		nota1 = entrada.nextDouble();
		System.out.println("Digite a segunda nota: ");
		nota2 = entrada.nextDouble();
		System.out.println("Digite a terceira nota: ");
		nota3 = entrada.nextDouble();
		
		total = nota1 + nota2 + nota3;
		media = total / 3;
		
		System.out.println("Digite a frequ�ncia do aluno: ");
		frequencia = entrada.nextDouble();
		
		if (media >= 70 && frequencia >= 0.75)
			situacao = "Aprovado";
		else
			situacao = "Reprovado";
		
		System.out.printf("O aluno obteve m�dia %.2f e frequenca %.2f%%. \n"
				+ "Com isso a situa��o do aluno �: %s", media, frequencia*100, situacao);

	}

}
