package entradaTeclado;

import java.math.*;
import java.util.*;

public class Aula3_1 {

	public static void main(String[] args) {
		
		double nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, frequencia = 0, totalNotas = 0;
		String nomeAluno;
		char statusAluno;
		boolean aprovado;
		
		
		Scanner entradaCaractere = new Scanner(System.in);
		
		System.out.println("Digite o nome do estudante: ");
		nomeAluno = entradaCaractere.nextLine();
		System.out.printf("O nome do aluno �: %s \n", nomeAluno);
		
		System.out.println("Digite qual a situa��o do aluno (O --> OK ou P --> Pend�ncias): ");
		statusAluno = entradaCaractere.nextLine().charAt(0);
		System.out.printf("A situa��o do aluno �: %c \n", statusAluno);
		
		Scanner entradaNotas = new Scanner(System.in);
		System.out.println("Digite a primeira nota: ");
		nota1 = entradaNotas.nextDouble();
		System.out.println("Digite a segunda nota: ");
		nota2 = entradaNotas.nextDouble();
		System.out.println("Digite a terceira nota: ");
		nota3 = entradaNotas.nextDouble();
		System.out.println("Digite a quarta nota: ");
		nota4 = entradaNotas.nextDouble();
		
		totalNotas = nota1 + nota2 + nota3 + nota4;
		System.out.printf("O total de notas � %.0f", totalNotas);
		Scanner entradaFrequencia = new Scanner(System.in);
		System.out.println("Digite a frequencia do aluno: ");
		frequencia = entradaFrequencia.nextDouble();
		System.out.printf("A frequ�ncia do estudante �: %.0f%%", frequencia);
		

	}

}
