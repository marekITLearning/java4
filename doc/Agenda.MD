# JAVA 4 OBSAH #

# Starý popis
> Počítačové školenie Java IV. - Java SE pre profesionálov je určené pre absolventov našich kurzov Java I., Java II., Java III., alebo všetkých, ktorí si chcú prehĺbiť poznatky o praktických používaných technológiách. Naučíme vás ako lambda výrazy uľahčujú písanie zdrojového kódu a ako nahradzujú anonymné vnútorné triedy a tiež to, ako pomocou lambda výrazov a Java 9 Stream API výrazne zefektívňujeme spracovanie dát - vyhľadávanie, filtrovanie, transformovanie, počítanie a zoskupovanie. Budete oboznámení s tým, ako nám návrhové vzory pomáhajú riešiť časté programátorské úlohy a písať štandardizovaný zdrojový kód. Budete vedieť ako vytvoriť modernú grafickú aplikáciu, ktorá bude dobre vyzerať, vďaka tomu, že vám ukážeme ako ju jednoducho dizajnovať pomocou drag and drop prístupu a štylizovať pomocou kaskádových štýlov (CSS). Napokon vám ukážeme ako jednotlivé grafické prvky vašej aplikácie “oživiť” definovaním metód v Controlleri – v riadiacej triede vzoru Model View Controller.

## Programy, skripty, aplikácie ##
- **Program** je súbor inštrukcií napísaných v programovacom jazyku, ktorý vykonáva určité úlohy. Môže vyžadovať kompiláciu. Môže mať GUI alebo má iba CLI. Napríklad Git.
- **Skript** je jednoduchý a rýchlo spustiteľný program bez kompilácie napísaný v skriptovacom jazyku (shell, python).
- **Aplikácia** je zvyčajne rozsiahlejšia, orientovaná na používateľa a má používateľské rozhranie. Napríklad kancelársky balík alebo webová aplikácia.

*Všetky aplikácie sú programy, ale nie všetky programy sú aplikácie.*

## Levely ##
1. základy programovacieho jazyka
1. pokročilé techniky programovacieho jazyka
1. znalosť štandardných frameworkov - jakarta EE, Spring
1. architektúra aplikácií, ich tvorba a DevOps

## Typy programov a aplikácií ##
Jednoduchý program implementovaný ako jedna trieda a spustiteľný priamo s java.exe

Jednoduchý program implementovaný ako štandardný maven project s viacerými triedami bez závislostí na treťostranové java knižnice 
 - spustiteľný príkazom java.exe -cp <root_dir> <main_class>
 - spustiteľný príkazom java.exe -jar <standard_jar>

Program implementovaný ako jeden alebo viacero java modulov + treťostranových knižníc spustiteľný príkazom java.exe -jar <assemblied_jar>
- Desktopové aplikácie púšťané na osobných počítačoch (eclipse)
- Webové aplikácie, ktoré bežia na serveri a sú prístupné prostredníctvom webového prehliadača
- Aplikácie, ktoré bežia na serveri a spracovávajú požiadavky klientov, často poskytujú REST API

Program implementovaný ako jeden alebo viacero java modulov + treťostranových knižníc zbuildovaný do war a spúštaný na webovom alebo java servery.

Program implementovaný ako jeden alebo viacero java modulov + treťostranových knižníc + viacero war zbuildovaný do ear a spúštaný na java servery.

## DevOps ##
DevOps praktiky pre Java aplikácie sú zamerané na zefektívnenie vývoja, testovania a nasadenia softvéru, čím sa zvyšuje kvalita a rýchlosť dodávania aplikácií.
Implementácia týchto praktík vedie k lepšej spolupráci medzi tímami a znižuje riziko chýb pri nasadení.

### Ďalšie typy programov, ale nie z pohľadu build a deployment ###
- Alikácie určené pre mobilné zariadenia, ktoré môžu bežať na systémoch Android
- Aplikácia na spracovanie a analýzu dát pomocou knižnice Apache Spark alebo Apache Flink.
- Java Applet: Aplikácie bežiace v prostredí webového prehliadača, ktoré sa už dnes často nepoužívajú kvôli problémom s bezpečnosťou a obmedzeniam moderných prehliadačov.
- JavaFX aplikácia: Aplikácie s bohatým grafickým užívateľským rozhraním (GUI), ktoré sa môžu spúšťať ako samostatné aplikácie alebo v prostredí webového prehliadača.
- Desktop aplikácia: Samostatné aplikácie bežiace na desktopových operačných systémoch, často s grafickým užívateľským rozhraním (napr. Swing alebo JavaFX).
- Microservices: Moderné aplikácie, ktoré sú rozdelené do viacerých nezávislých služieb, často bežiacich v kontejnere (napr. Docker) a komunikujúcich prostredníctvom API.
- Command-Line Interface (CLI): Programy, ktoré sa spúšťajú z príkazového riadku a interagujú s používateľom prostredníctvom textového rozhrania.
- Spring Boot aplikácia: Aplikácie postavené na Spring frameworku, ktoré umožňujú jednoduché vytváranie samostatných, produkčných aplikácií s minimálnym nastavením.
