import { Component, OnInit } from '@angular/core';
import { TreeNode, MessageService } from 'primeng/api';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-welcome-ui',
  templateUrl: './welcome-ui.component.html',
  styleUrls: ['./welcome-ui.component.css']
})
export class WelcomeUIComponent implements OnInit {
  data: TreeNode[];
  selectedNode: TreeNode;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.data = [{
      label: 'UI (Angular 7 + Prime NG)',
      expanded: true,
      data:` Application User Interface is built using Angulat 7.x 
      and PrimeNG is used to make UI rich and responsive.`,
      children: [
        {
          label: 'API Gateway (Zuul Proxy)',
          expanded: true,
          data:` User interface interacts with API Gateway which is developed with Zuul proxy of Spring Cloud.
          UI need not to be aware about individual microservices. It only has to interact with API Gateway`,
          children: [
            {
              label: 'Service Registry (Eureka)',
              expanded: true,
              data:`API Gateway calls Services using Service Registry which is developed with Eureka Server of Spring Cloud.
              Again, Gateway need not to be aware about hosting details of individual microservices. It only has to interact with Registry.`,
              children: [
                {
                  label: 'Customer MicroService (Spring-Cloud)',
                  expanded: true,
                  data:`Deployed on Tomcat, Customer module specific microservice is developed using SpringBoot, SpringData,Hibernate, H2 and Eureka Discory.`
                },{
                  label: 'Item MicroService (Spring-Cloud)',
                  expanded: true,
                  data:`Deployed on Jersy, Item module specific microservice developed is using SpringBoot, SpringData,Hibernate, H2 and Eureka Discory.`
                },{
                  label: 'Sales Order MicroService (Spring-Cloud)',
                  expanded: true,
                  data:`Deployed on Undertow, Sales Order module specific microservice is developed using SpringBoot, SpringData,Hibernate, H2 and Eureka Discory.`
                }
              ]
            }
          ]
        }
      ]
    }];
  }
  onNodeSelect(event) {
    this.messageService.add({severity: 'info', summary: event.node.label , detail: event.node.data, life: 10000});
}
}
