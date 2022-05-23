package info.jab.microservices.service;

import info.jab.microservices.model.Cliente;
import info.jab.microservices.model.Login;
import info.jab.microservices.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientesService {

    @Autowired
    ClientesRepository clientesRepository;

    public String login(Login datos){
        String message = "Found";
        Cliente cliente = clientesRepository.login(datos.getEmail(), datos.getContraseña());
        if(cliente.equals(null))
            message = "Not Found";
        return message;
    }

    public String saveClient(Cliente cliente){
        String message = "Created";
        clientesRepository.saveClient(cliente.getEMAIL(), cliente.getPASSWORD(),cliente.getNOMBRE(),cliente.getAPELLIDOS(),cliente.getTELEFONO());
        return message;
    }

}
