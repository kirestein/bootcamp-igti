package tiposDoPrint;

public class ClasseAula2_7 {

	public static void main(String[] args) {
		int idade = 36;
		double altura = 1.85;
		String nome = "Erik Proen�a";
		boolean casado = true;
		
		// %s � coringa do String
		// %d � coringa do inteiro
		//%.2f float ou double com duas casa decimais
		//%b � o coringa do boolean
		//%c � o coringa do char
		
		System.out.printf("O %s tem idade igual a %d e a altura igual a %.2f e o "
				+ "fato de ele ser casado � %b", nome, idade, altura, casado);
		
		//System.out.println("Idade = " + idade);
		//System.out.print("Altura = " + altura);

	}

}
