package info.jab.microservices.controller;

import info.jab.microservices.model.Cliente;
import info.jab.microservices.model.Login;
import info.jab.microservices.service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ClientesController {

    @Autowired
    private ClientesService clientesServiceService;

    @PostMapping("login")
    public ResponseEntity<Object> login(@RequestBody @Valid Login datos) {
        String message = clientesServiceService.login(datos);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("cliente")
    public ResponseEntity<Object> login(@RequestBody @Valid Cliente cliente) {
        String message = clientesServiceService.saveClient(cliente);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
