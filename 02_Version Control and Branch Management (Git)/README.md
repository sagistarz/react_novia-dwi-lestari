## Version Control and Branch Management (Git)

versoning/version control
menggatur versi dari source code program kita tugasnys

Tools
version control system (vcs)
source code manager (scm)
revision control system (rcs)

version control system (vcs)

- single user
- centralized
- distributed -> git muncul (2005) -> mencakup semua

Git
diciptain oleh linus torvalds  
salah satu vcs untuk mengembabgkan software secara bersama2

dgn adanya git kita bisa melakukan programming secara kolaborasi (real world collaboration)

git ini terdistribusi bukan tersentralisasi ysng artinya tiiap orang bisa punya kose densiri2 yg bisa dmasukin server

Remote computer/server

git repository (folder project)
berisi 2 : folders and files dan history

commit -> upload ke server

github seperti social media untuk programmer
-> salah satu patokan untuk kerja nanti (programmer yang aktif)

Instalasi git

gitignore -> mencegah file atau folder supaya gak ke upload ke arah github nya.

clone/download file github
command : git clone (url nya boleh http/ssh/atau yang ada disitu)
dilakuin lewat git bash di dalem folder yang mau ditaro cloningan nya

The staging area (local ditempat kita)
working directory (di file vscode nya yg lagi kita kerjain)
git add
staging area (yang mau commit ituu )
git commit
repository

ijo = hal yang baru

git add . -> masukin semua yang di change ke arah staging area
git commit -m "message" (nge wrap jadi 1 paket)

- warna akan ganti wanra
  git push origin (sama kayak sync)

origin -> main default dr github (ini bisa diganti2 ya origin)

git diff -> mengetahui perubahan yang terjadi di file yang di edit
git diff muncul di terminal
puth : udh ada disana
merah : perubahan
hijau : sudah ada darisana

git stash -> menyimpan perubahan. (msh blm paham)

file .gitignore -> berfungsi ngefilter mana aja yang boleh masuk ke repo/tidak boleh (jadi gausah dimasukin library2 yang kita pake, cukup download di local)


#3
Inspecting repository
-> bagaimana me manajemen file yang kita buat

git log --oneline -> menampilkan setiap commit yang udah kita lakuin

kalo kita mau masukin file (undo) sebelumnya gimana?
cek dulu pake git log --oneline, abis itu nanti keliatan code disampingnya gitu (yang kayak angka random), nah nanti kalo udah, masukin command git checkout (kode). nanti bakal balik ke kode tsb

git checkout

git reset
gaada perubahan pada kode, namun di bagian graph nya akan keliatan berubah
git reset --soft -> lebih direkomendasikan
git reset --hard 

syncing
# git remote
keluar url dari repo yang sudha kita akses 
git remote -v
git remote add origin https://github.com

# git fetch

# git push
git push origin main 
git push origin feature/login-user

# git pull
git pull origin main -> naro semua yang di repo ke file local

git log --oneline -> balik ke tag yg sblmnya

#  branches
-> berfungsi melindungi main project kita

## show all branch
git branch --list
-> liat branch apa aja yang sudah ada

## create a new branch called <brandh>
git branch <branch>
-> bikin branch baru
biasanya nama branhc "developer", jadi nanti kalo kita projectan, kita push ke branch developer dulu, jangan langsung ke main. biar bisa di cek dulu ada bug atau kesalahan gitu gak

## force delete the specified branch
git branch -D <branch>

## list remote branch
git branch -a

habis create new branch, jangan lupa di PUSH 
command : git push -u origin developer
origin : nama branch yang terhubung
developer : new branch nya

## pindah branch
git checkout main -> balik ke branch main   
git switch main -> balik ke branch main

# git merge
## start a new feature
git checkout -b new-feature main

## edit some files
git add <file>
gir commit -m "text"

## merge in the new feature branch
git checkout main
git merge new-feature
git branch -d new-feature (new feature itu nama branch baru kita yg mau di merge)

# pull request
digunakan biar kita kontribusi terhadap repo orang
fork = cloning
buka di cli aja
cmd : git clone link ssh
ls
less README.md


kita fork dulu, kita ubah penamaan, baru pull request

# workflow collaboration
how to optimize ut workflow with gitlab and github

punya branch main
punya branch dev (clone dari main)
dari dev, tiap fitur dibikin branch baru (di copy dari dev). nah nanti tiap mau push itu ke dev. dan kalo mau merge juga ke dev.

pokoknya biarin branch main diemin aja.

tips lain
1. biarin branch main gak terdistribusi
2. hindari untuk ngedit langsung di arah developer, pokoknya bikin aja branch untuk tiap fitur
3. merge selalu ke arah dev, jangan ke arah main
4. kalo bener2 udah selesai, udah di cek bug dan kesalahan lain, baru di merge ke main

conflict
ngerubah barengan dan di push barengan
enak liat conflict lewat github desktop

hijau : github udah di push
merah : file dah gaada di github desktop tapi di tempat kalian msh ada
abu-abu : file tidak akan di upload ke github 