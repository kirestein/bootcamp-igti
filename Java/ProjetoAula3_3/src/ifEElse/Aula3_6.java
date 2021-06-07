package ifEElse;
import java.math.*;
import java.util.*;
public class Aula3_6 {

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
		
		System.out.println("Digite a frequência do aluno: ");
		frequencia = entrada.nextDouble();
		
		if (media >= 70 && frequencia >= 0.75) {
			
			if (media >= 90)
				situacao = "Aprovado com conceito A";
			else if (media >= 80 && media < 90)
				situacao = "Aprovado com conceito B";
			else
				situacao = "Aprovado com conceito C";
			
		}
		else if (media >= 40 && media < 70 && frequencia >= 0.75)
			situacao = "Recuperação";
		else
			situacao = "Reprovado";
		
		System.out.printf("O aluno obteve média %.2f e frequenca %.0f%%. \n"
				+ "Com isso a situação do aluno é: %s", media, frequencia*100, situacao);

	}

}
