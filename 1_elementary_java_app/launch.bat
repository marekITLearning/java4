REM 1 - od verzie java 11 vieme spustit priamo zdrojovy subor bez kompilacie
REM 2 - zdrojove subory java by mali mat vzdy kodovanie (code page, skratka cp) nastavene na UTF-8
REM 3 - problemy s diakritikou v kode pri spustani z prikazoveho riadka ak nie je nastaveny na UTF-8
REM 4 - problemy pri kompilacii z prikazoveho riadka ak nie je nastaveny na UTF-8
chcp 65001
C:\devel\jdk-21.0.4\bin\javac -encoding UTF-8 App.java
C:\devel\jdk-21.0.4\bin\java App
pause