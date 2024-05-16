import csv
import json

csvfile = open('contratos2024.csv', 'r')
jsonfile = open('contratos2024.json', 'w')

fieldnames = ("_id", "nAnuncio", "tipoprocedimento", "objectoContrato", "dataPublicacao", "dataCelebracaoContrato", "precoContratual", "prazoExecucao", "NIPC_entidade_comunicante", "entidade_comunicante", "fundamentacao")
reader = csv.DictReader(csvfile, fieldnames, delimiter=';')

# Convert each row to a dictionary and convert certain fields to numbers
out = []
# remove the header
next(reader)

for row in reader:
    row['_id'] = int(row['_id'])
    row['precoContratual'] = float(row['precoContratual'].replace(',', '.'))
    row['prazoExecucao'] = int(row['prazoExecucao'])
    out.append(row)


json.dump(out, jsonfile, indent=4, ensure_ascii=False)