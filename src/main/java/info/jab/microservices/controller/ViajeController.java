package info.jab.microservices.controller;

import info.jab.microservices.model.Viaje;
import info.jab.microservices.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ViajeController {

    @Autowired
    private ViajeService viajeService;

    @GetMapping("/viajes")
    public ResponseEntity<List<Viaje>> getViajes(){
        List<Viaje> viajes = viajeService.getViaje();
        ResponseEntity<List<Viaje>> respuesta = new ResponseEntity<>(viajes, HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/viajes/{id}")
    public ResponseEntity<Viaje> getViajesByID(@PathVariable int id){
        Viaje viajes = viajeService.getViajeByID(id);
        ResponseEntity<Viaje> respuesta = new ResponseEntity<>(viajes, HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/viajes/filtros")
    public ResponseEntity<List<Viaje>> getViajesFiltros(@RequestParam("asia") boolean asia, @RequestParam("europa") boolean europa,@RequestParam("america") boolean america, @RequestParam("africa") boolean africa, @RequestParam("oceania") boolean oceania){
        List<Viaje> viajes = viajeService.getViajeFiltro(asia, europa, america, africa, oceania);
        ResponseEntity<List<Viaje>> respuesta = new ResponseEntity<>(viajes, HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/viajes/ofertas")
    public ResponseEntity<List<Viaje>> getViajesOfertas(){
        List<Viaje> viajes = viajeService.getViajesOferta();
        ResponseEntity<List<Viaje>> respuesta = new ResponseEntity<>(viajes, HttpStatus.OK);
        return respuesta;
    }

}
