package info.jab.microservices.repository;

import info.jab.microservices.model.Reserva;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ReservaRepository extends CrudRepository<Reserva, String> {

    @Modifying
    @Transactional
    @Query("INSERT INTO RESERVA (ID_VIAJE,EMAIL,FECHA_INICIO,FECHA_FINAL,NUMERO_PERSONAS) VALUES (:ID_VIAJE,:EMAIL,:FECHA_INICO,:FECHA_FINAL,:NUMERO_PERSONAS)")
    void saveBooking(@Param("ID_VIAJE") int ID_VIAJE, @Param("EMAIL") String EMAIL, @Param("FECHA_INICO") String FECHA_INICO, @Param("FECHA_FINAL") String FECHA_FINAL, @Param("NUMERO_PERSONAS") int NUMERO_PERSONAS);

    @Query("SELECT * FROM RESERVA WHERE EMAIL=:email ORDER BY FECHA_INICIO")
    List<Reserva> getBookings(@Param("email") String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM RESERVA WHERE ID_RESERVA=:id_reserva")
    void deleteBooking(@Param("id_reserva") int id_reserva);

    @Modifying
    @Transactional
    @Query("UPDATE RESERVA SET FECHA_INICIO=:FECHA_INICIO,FECHA_FINAL=:FECHA_FINAL,NUMERO_PERSONAS=:NUMERO_PERSONAS WHERE ID_RESERVA=:id_reserva")
    void updateReserva(@Param("FECHA_INICIO") String fecha,@Param("FECHA_FINAL") String hora,@Param("NUMERO_PERSONAS") int numero_personas,@Param("id_reserva") int id_reserva);

}
