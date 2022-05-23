package info.jab.microservices.repository;

import info.jab.microservices.model.Viaje;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ViajeRepository extends CrudRepository<Viaje, Integer> {

    @Query("SELECT * FROM VIAJE")
    List<Viaje> getViaje();

    @Query("SELECT * FROM VIAJE ORDER BY DESCUENTO DESC")
    List<Viaje> getViajeOferta();

    @Query("SELECT * FROM VIAJE WHERE ID=:id")
    Viaje getViajeByID(@Param("id") int id);

    @Query("SELECT * FROM VIAJE WHERE ASIA=:asia")
    List<Viaje> getViajeAsiatico(@Param("asia") boolean asia);

    @Query("SELECT * FROM VIAJE WHERE EUROPA=:europa")
    List<Viaje> getViajeEuropeo(@Param("europa") boolean europa);

    @Query("SELECT * FROM VIAJE WHERE AMERICA=:america")
    List<Viaje> getViajeAmericano(@Param("america") boolean america);

    @Query("SELECT * FROM VIAJE WHERE AFRICA=:africa")
    List<Viaje> getViajeAfricano(@Param("africa") boolean africa);

    @Query("SELECT * FROM VIAJE WHERE OCEANIA=:oceania")
    List<Viaje> getViajeOceanico(@Param("oceania") boolean oceania);

}
