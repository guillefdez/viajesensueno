package info.jab.microservices.service;

import info.jab.microservices.model.Favoritos;
import info.jab.microservices.repository.FavoritosRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritosService {
    @Autowired
    private FavoritosRepositoy favoritosRepositoy;

    public List<Favoritos> findAllByEmail(String email){
        return favoritosRepositoy.findAllByEmail(email);
    }

    public void saveFavorite(Favoritos f){
        favoritosRepositoy.saveFavorite(f.getId(), f.getEmail());
    }
    public void deleteFavorite(Favoritos f){
        favoritosRepositoy.deleteFavorite(f.getId(), f.getEmail());
    }
}
