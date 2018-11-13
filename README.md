# Online Shopping Example with Microservices Using Spring

## Requiremenent
  ### Micro Services:
  - Customer Service:
    - Retrieve all Customers
    - Retrieve one Customer using Id.
    - Add Customer, When a customer is added, sales order service should also create a copy of the customer in it
    - Update Customer
    - Delete Customer
    - Should be Deployed on tomcat
  - Item Service:
    - Retrieve all Items
    - Retrieve one Item with Item Name.
    - Add Item
    - Update Item
    - Delete Item
    - Should be deployed on Jersy
  - Sales Order Service:
    - Retrieve all Orders
    - Retrieve one Order with Order Id
    - Add Order
    - Should be deployed on Undertow server
### Service Registry:
  - All above services should Register them with this Registry
### API Gateway:
  - All Services should be accessible with single gateway
### Configuration of the application should be centralized

## Technologies Used
  - Angular 7
  - PrimeNG for reach and responsive UI
  - Java 1.8
  - Spring Boot
  - Spring Cloud (Eureka Discovery,Eureka Server, Config, Zuul)
  - Spring Data, Hibernate
  - H2 Database
  - Kafka for Communication between microservices
  - Spring Java Mailer
  - Swagger2 (UI for testing of APIs)  

## Softwares Pre-requisite
  - Java 1.8
  - Maven 
  - Eclipse Neon(4.6.3+) / Spring Tool Suite(3.8.4+) - Optional. You can run projects using Maven
  - Kafka ( alreay present in repository)
  - SMTP Mail Server Jar ( Already present in repository)
  - Node.js (8.x+) + NPM (5.6.x+)

## How to Run the project
  ### Run Zookeeper and Kafka
  - Run Zookeeper
    - **Windows**: Go to 'kafka_2.11-2.0.0' and Run bin\windows\zookeeper-server-start.bat config\zookeeper.properties
    - **Linux**: Go to 'kafka_2.11-2.0.0' and Run bin\zookeeper-server-start.sh config\zookeeper.properties
  - Run Kafka
    - **Windows**: Go to 'kafka_2.11-2.0.0' and Run bin\windows\kafka-server-start.bat config\server.properties
    - **Linux**: Go to 'kafka_2.11-2.0.0' and Run bin\kafka-server-start.sh config\server.properties
  ### Run DevNullSmtp.jar
    Go to smtp-jar and run 'java -jar DevNullSmtp.jar'
  ### Run Configuration Server
    Import 'ConfigurationServer' as Maven project and Run it as Spring boot application.
  ### Run Eureka Server
    Import 'EurekaServer' as Maven project and Run it as Spring boot application.
  ### Run Customer Service
    Import 'CustomerService' as Maven project and Run it as Spring boot application.
  ### Run Item Service
    Import 'ItemService' as Maven project and Run it as Spring boot application.
  ### Run Sales Order Service
    Import 'SalesOrderService' as Maven project and Run it as Spring boot application.
  ### Run API Gateway
    Import 'APIGateway' as Maven project and Run it as Spring boot application.
  ### Run Angular 7.x based Shopping UI
    1. Install angular CLI - 'npm install -g @angular/cli'
    2. Go to 'ShoppingUI/ShoppingUI' folder which has 'package.json' file. 
    3. Run 'npm install'
    4. Run 'ng serve --open'. Application will open up in a browser.

- **Shopping UI Url:**
  - UI application will run on default Port(4200). So, UI Application can be accessed using: 'http://localhost:4200/'
- **Customer Service can be tested:**
    - Either using API Gateway: http://localhost:5555/customersApi/swagger-ui.html
    - Or using direct URL: http://localhost:5051/swagger-ui.html
	- Or in Angular UI
	- Customer Database console: http://localhost:5051/h2-console/ - 'jdbc:h2:mem:customerdb'
- **Item Service can be tested:**
    - Either using API Gateway: http://localhost:5555/itemsApi/swagger-ui.html
    - Or using direct URL: http://localhost:5052/swagger-ui.html
	- Or in Angular UI
	- Item Database console: http://localhost:5052/h2-console/ - 'jdbc:h2:mem:itemdb'
- **Sales Order Service can be tested:**
    - Either using API Gateway: http://localhost:5555/itemsApi/swagger-ui.html
    - Or using direct URL: http://localhost:5053/swagger-ui.html
	- Or in Angular UI
	- Sales order Database console: http://localhost:5053/h2-console/ - 'jdbc:h2:mem:salesorderdb'
