import time

for minuto in range(9, -1, -1):

    for segundo in range(59, -1, -1):
        print(f"{minuto:02d}:{segundo:02d}")
        time.sleep(1)

print("00:00")
print("Contagem regressiva finalizada!")