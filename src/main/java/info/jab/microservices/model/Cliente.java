package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Builder
@Table("CLIENTE")
public class Cliente {

    @Id
    @NonNull
    private String EMAIL;
    @NonNull
    private String NOMBRE;
    @NonNull
    private String APELLIDOS;
    @NonNull
    private String TELEFONO;
    @NonNull
    private String PASSWORD;

}
