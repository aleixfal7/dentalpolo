import requests

consum_actual = requests.get("http://192.168.1.50/status").json()['meters'][0]['power']

if consum_actual < 50:
    print("Fàbrica inactiva. Iniciant protocol d'apagada de servidors no crítics...")
    #api i conexion al protocol de apagada
else:
    print("Producció en marxa. Sistemes a ple rendiment.")
    #res que continui