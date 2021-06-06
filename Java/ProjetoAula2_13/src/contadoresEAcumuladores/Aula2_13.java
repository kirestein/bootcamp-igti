package contadoresEAcumuladores;

import java.math.*;

public class Aula2_13 {

	public static void main(String[] args) {
		
		double nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, frequencia = 0, totalNotas;
		String nomeAluno = "Erik Proença";
		char statusAluno;
		boolean aprovado;
		
		statusAluno = 'M';
		
		nota1 = 20;
		nota2 = 20;
		nota3 = 20;
		nota4 = 5;
		frequencia = 0.80;
		
		totalNotas = nota1 + nota2 + nota3 + nota4;
		
		aprovado = totalNotas >= 70 && frequencia >= 0.75;
		
		System.out.printf("O(a) aluno(a) %s obteve nota final %.0f e frequencia %.0f%%. "
				+ "\n A situação do(a) aluno(a) é %c. \n"
				+ "Aluno aprovado? %b", nomeAluno, totalNotas, frequencia*100, statusAluno, aprovado);
		
		
		

	}

}
