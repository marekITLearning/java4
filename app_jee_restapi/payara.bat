rmdir /s /q pmroot
C:/devel/jdk-11.0.8/bin/java.exe -jar C:/devel/payara-micro-5.2020.3.jar --deploy target/restapi.war --port 8080 --rootDir pmroot --domainConfig domain.xml
rem -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8003