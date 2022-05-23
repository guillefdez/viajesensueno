package info.jab.microservices.repository;


import info.jab.microservices.model.Cliente;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ClientesRepository extends CrudRepository<Cliente, String> {

    @Query("SELECT * FROM CLIENTE WHERE EMAIL=:email AND PASSWORD=:password")
    Cliente login(@Param("email") String email, @Param("password") String password);

    @Modifying
    @Transactional
    @Query("INSERT INTO CLIENTE (EMAIL, PASSWORD, NOMBRE, APELLIDOS, TELEFONO) VALUES (:email,:password,:nombre,:apellidos,:telefono)")
    void saveClient(@Param("email") String email, @Param("password") String password, @Param("nombre") String nombre, @Param("apellidos") String apellidos, @Param("telefono") String telefono);

}
