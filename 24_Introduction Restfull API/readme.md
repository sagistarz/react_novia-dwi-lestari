## Introduction Restfull API

Kegunaan restfull API adalah dapat menggunakannya dalam pengintegrasian frontend dengan backend.

Cara kerja API dengan menggunakan proses request dari FE ke Be dengan menggunakan library untuk mengambil atau mengirim suatu data, sehingga API dapat memberikan respon sesuai dengan yang diminta.

Kegunaan API dalam case yang berbeda yaitu untuk integrasi dengan service to service dengan menggunakan API pembayaran pada suatu bank dengan menggunakan Midtrans API dalam penghubungannya.

REST singkatan dari Representational State Transfer.

API Testing tools yang dapat digunakan yaitu

- katalon
- apache JMeter
- Postman
- SoapUI
- Insomnia

Postman adalah HTPP client yang dapat digunakan untuk melakukan testing sebuah web client dengan membantu dalam proses testing yang mudah, deploy dan documentasi dengan cepat dan simpel.

Open API adalah API yang dapat diakses secara public dan dapat menggunakan API secara bebas.

### Create Server API

Penggunakan library pada golang dengan menggunakan package net/http dan package encoding/json.

1. package net/http adalah sebuah package yang dapat digunakan untuk membuat server API dan mengconsume sebuah API.
2. package encoding/json, memiliki fungsi :
    - decode JSON to Object Struct
    - decode JSON to Map[String]interface{} & interface{}
    - decode array JSON to array object
    - encode object to JSON string

Terdapat function main yang berisi pemanggilan library http dengan menggunakan func handleFunc seperti mendefine routenya dan function pada API nya, fmt untuk melakukan pengecekan server, dan memanggil http listenAndServer untuk running server yang sudah dibuat.