import random

# O computador escolhe uma opção aleatória de 1 a 3
numero = random.randint(1, 3)

print("=== Jogo da Adivinhação ===")
print("Escolha uma opção:")
print("1")
print("2")
print("3")

jogador = int(input("Digite sua escolha: "))

if jogador == numero:
    print(" Parabéns! Você acertou!")
else:
    print(" Você errou!")
    print(f"O número escolhido pelo computador era {numero}.")
