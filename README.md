# JardinBotanico-FrontEnd
Proyecto de titulación enfocado a la predicción de plantas medicinales dentro del jardín botánico de Cuenca
## Introducción
Nuestro proyecto da a conocer los diferentes procesos que se llevaron a cabo para la creación del aplicativo móvil, como el marco teórico el cual nos detallara de mejor manera la propuesta y las metodologías utilizadas, los resultados obtenidos, cronograma de cómo se fue realizando, presupuesto invertido en el proyecto, conclusiones y recomendaciones que se puedan presentar.
## Objetivo
Desarrollar una aplicación móvil basada en visión por computador para la identificación y documentación de las plantas medicinales del jardín botánico de Cuenca.
## Desarrollo
1. Creacion del proyecto jardin_botanico usando el framework de Ionic.
comandos pra la creación:
   * npm install -g @ionic/cli
   * ionic start jardin_botanico blank
   * ionic start jardin_botanico tabs
  
  ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/4318e182-6b00-42d9-b7e7-abc49e7e4f1e) 

2. Creación de los modulos y el servicio a ser desarrollados.
   
  ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/d9c4e1a3-91d9-47a8-bca3-cbece6cec28f)
  
 * Servicio:
   
   ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/42a9a118-e243-4717-b433-e4a517f6d283)

3. Generación de la Apk.
   Comandos:
   * ionic build: Este comando se crea la carpeta www que representa la carpeta de salida que contiene los archivos finales de la aplicación listos para ser ejecutados en un navegador o empaquetados en una aplicación móvil.
   * npx cap add android: Este comando agrega el proyecto en un carpeta android Android que servira para la reneracion de la apk.
   * ionic capacitor open android: Este condalo desplegara el proyecto en android studio.

   ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/a7c27bba-cc4c-4b01-adef-02ed224f364c)

4. Configuracion de los archivos para los permisos de internet de la apk.
   
   ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/7c8f8351-1fff-4882-a3a4-8f59c3c7ef86)
   
    * importante la creacion del archivo network_security_config.xml, este archivo permitira la coneccion de internet de la apk. 
   
  ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/d847d89a-98ee-4254-8a29-119b5d31fa95)

    * Y tener configurado en el AndroidManifest.xml, el llamado del archivo network_security_config.xml
  ### Nota: tener en cuenta lo subrayado.

    ![image](https://github.com/GIHP4C/JardinBotanico-FrontEnd/assets/49033433/3de92829-fe6a-4967-b78a-72244a847ac7)















   
