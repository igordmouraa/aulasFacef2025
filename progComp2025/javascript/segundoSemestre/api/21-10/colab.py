path = ('/content/drive/My Drive/AlgII/')
archiveName = input("Digite o nome do arquivo: ")

fullPath = path + archiveName

archive = open(fullPath, 'r')

wordCount = {}

for line in archive:
  words = line.split()

  for word in words:
    if word in wordCount:
      wordCount[word] = wordCount[word] + 1
    else:
      wordCount[word] = 1

print(wordCount)
