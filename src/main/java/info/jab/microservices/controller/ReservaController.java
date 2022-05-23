package info.jab.microservices.controller;

import info.jab.microservices.model.Reserva;
import info.jab.microservices.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping("/reservas/{email}")
    public ResponseEntity<List<Reserva>> getReservas(@PathVariable("email") String email){
        List<Reserva> reservas = reservaService.getBookings(email);
        ResponseEntity<List<Reserva>> respuesta = new ResponseEntity<>(reservas, HttpStatus.OK);
        return respuesta;
    }

    @PostMapping("/reservas")
    public ResponseEntity<Object> saveReserva(@RequestBody @Valid Reserva reserva){
        reservaService.saveReserva(reserva);
        ResponseEntity<Object> respuesta = new ResponseEntity<>("OK", HttpStatus.OK);
        return respuesta;
    }

    @DeleteMapping("/reservas/{id_reserva}")
    public ResponseEntity<Object> deleteReserva(@PathVariable("id_reserva") int id_reserva){
        reservaService.deleteReserva(id_reserva);
        ResponseEntity<Object> respuesta = new ResponseEntity<>("OK", HttpStatus.OK);
        return respuesta;
    }

    @PutMapping("/reservas")
    public ResponseEntity<String> updateReserva(@RequestBody Reserva reserva){
        reservaService.updateReserva(reserva);
        ResponseEntity<String> respuesta = new ResponseEntity<>("UPDATED" , HttpStatus.OK);
        return respuesta;
    }

}
