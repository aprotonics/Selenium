import requests

url = "https://app.ecwid.com/api/v3/59965088/orders?token=public_tgixALWxbCn2aymYLz2a2uAKXX5cSrCQ"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
