programa
{
	
	funcao inicio()
	{
		real jan, fev, mar, abr, salario, salariofim, media, total, abono
		cadeia func
		salario = 1289.41
		escreva("Digite o nome do funcionário: ")
		leia(func)
		escreva("Valor de vendas de Janeiro: R$")
		leia(jan)
		escreva("Valor de vendas de Fevereiro: R$")
		leia(fev)
		escreva("Valor de vendas de Março: R$")
		leia(mar)
		escreva("Valor de vendas de Abril: R$")
		leia(abr)

		total = jan+fev+mar+abr
		escreva("Total de vendas R$" + total +"\n")
		
		media = total/4
		se(media>=5000){
			abono = salario*0.1
			salariofim = salario+abono
			escreva("Parabenise o funcionário "+ func +" por ter batido a meta de vendas dos últimos 4 meses!!! \n")
			escreva("O salário dele será reajustado de R$" + salario + " para R$" + salariofim)
		}senao{
			abono = salario*0.003
			salariofim = salario+abono
			escreva("Infelizmente o funcionário "+ func +" não obteve a meta de vendas dos últimos 4 meses... \n")
			escreva("O salário dele será reajustado de R$" + salario + " para R$" + salariofim)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 886; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */