package info.jab.microservices.controller;

import info.jab.microservices.model.Favoritos;
import info.jab.microservices.service.FavoritosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FavoritosController {

    @Autowired
    private FavoritosService favoritosService;

    @GetMapping("/favoritos/{email}")
    public ResponseEntity<List<Favoritos>> getFavoritosUser(@PathVariable("email") String email){
        List<Favoritos> favoritos = favoritosService.findAllByEmail(email);
        ResponseEntity<List<Favoritos>> respuesta = new ResponseEntity<>(favoritos, HttpStatus.OK);
        return respuesta;
    }

    @PostMapping("/favoritos")
    public ResponseEntity<Object> saveFavoritoUser(@RequestBody @Valid Favoritos favoritos){
        favoritosService.saveFavorite(favoritos);
        ResponseEntity<Object> respuesta = new ResponseEntity<>("OK", HttpStatus.OK);
        return respuesta;
    }

    @DeleteMapping("/favoritos")
    public ResponseEntity<Object> deleteFavoritoUser(@RequestBody @Valid Favoritos favoritos){
        favoritosService.deleteFavorite(favoritos);
        ResponseEntity<Object> respuesta = new ResponseEntity<>("OK", HttpStatus.OK);
        return respuesta;
    }
}
