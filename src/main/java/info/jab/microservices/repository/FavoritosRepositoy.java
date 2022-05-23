package info.jab.microservices.repository;

import info.jab.microservices.model.Cliente;
import info.jab.microservices.model.Favoritos;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FavoritosRepositoy extends CrudRepository<Favoritos, String> {

    @Query("SELECT * FROM FAVORITOS WHERE EMAIL=:email")
    List<Favoritos> findAllByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query("INSERT INTO FAVORITOS (ID, EMAIL) VALUES (:id,:email)")
    void saveFavorite(@Param("id") int id, @Param("email") String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM FAVORITOS WHERE ID=:id AND EMAIL=:email")
    void deleteFavorite(@Param("id") int id, @Param("email") String email);
}
