package com.vipul.config;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Profile("development")
@Configuration
public class DevelopmentConfiguration {

	private final static Logger LOGGER = LoggerFactory.getLogger(DevelopmentConfiguration.class);

	@Value("${db.name}")
	private String databaseName;

	@Bean
	public DataSource dataSource() throws SQLException {
		DataSource dataSource = new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.H2).setName(databaseName)
				.addScript("classpath:com/vipul/config/salesorder-schema-developement.sql").build();
		LOGGER.info("H2 database is running with metadata: {}", dataSource.getConnection().getMetaData().toString());
		return dataSource;
	}

}
