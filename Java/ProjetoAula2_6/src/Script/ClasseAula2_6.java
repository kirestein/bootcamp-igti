package Script;

public class ClasseAula2_6 {

	public static void main(String[] args) {
		
		String nome1 = "Erik Johannes Steindorfer Proen�a";
		String nome2 = "Cristhiane Buchmann Steindorfer Proen�a";
		
		System.out.println("O " + nome1 + " � casado com a " + nome2);
		
		int tamanhoDoNome1 = nome1.length(), tamanhoDoNome2 = nome2.length();
		
		System.out.println("A vari�vel nome1 tem " + tamanhoDoNome1 + " characteres");
		System.out.println("A vari�vel nome2 tem " + tamanhoDoNome2 + " characteres");
		
		String nome2SemN = nome2.replace('n', '0');
		System.out.println(nome2SemN);

	}

}
