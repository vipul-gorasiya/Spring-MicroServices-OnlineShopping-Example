package com.vipul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ConfigurationServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigurationServerApplication.class, args);
	}
}
