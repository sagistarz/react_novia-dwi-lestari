## State

State adalah data private sebuah component. data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari komponen lain.

State:

1. data yang bisa dimodifikasi menggunakan setState
2. setiap terjadi modifikasi akan terjadi render ulang
3. bersifat asynchronous
4. dipakai dalam class

| Props | State |
| --- | --- |
| read only | can be asynchronous |
| can’t be modified | can be modified using this.setState |

---

## Statefull & stateless component

Stateful component adalah memiliki state. component yang dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle.

Stateless component adalah komponen yang tidak memiliki state, hannya prop. umumnya component ini dibuat dengan function karena codenya lebih ringkas.

Komponen statefull dan stateless memiliki banyak nama berbeda, seperti

1. smart component & dump component
2. container component & presentational component

Perbedaan komponen stateful dengan komponen stateless

| Stateless component | stateful component |
| --- | --- |
| tidak tahu tentang aplikasi | mengerti tentang aplikasi |
| tidak melakukan data fetching (pengambilan data) | melakukan data fetching (pengambilan data) |
| tujuan utamanya adalah visualisasi | berinteraksi dengan aplikasi |
| dapat digunakan kembali | tidak dapat digunakan kembali |
| hanya berkomunikasi dengan induknya langsung | meneruskan statsu dan data ke anak anaknya |

---

## Handling events

Penanganan event pada react

Handling event adalah suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen.

Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.

Contoh dari list event:

1. clipboard events (promise terpenuhi)
2. form events (onChange, onSubmit)
3. mouse events (onClick, onDoubleClick, onMouseOver)
4. generic events (onError, onLoad)