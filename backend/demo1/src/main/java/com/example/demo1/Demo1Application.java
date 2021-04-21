package com.example.demo1;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo1.model.User;
import com.example.demo1.repository.UserRepository;



@SpringBootApplication
public class Demo1Application  implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
	}

	
	@Autowired
	private UserRepository userRepository;
	@Override
	public void run(String... args) throws Exception {
	       this.userRepository.save(new User("shruti","kangane","shrutikangne@gmail.com"));
	       this.userRepository.save(new User("neha","sawant","nehasawant@gmail.com"));
	       this.userRepository.save(new User("sayli","panchal","nehapanchal@gmail.com"));
			
	}
	


}
