package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Builder
@Table("AGENCIA")
public class Agencia {

    @Id
    @NonNull
    private String EMAIL;
    @NonNull
    private String NOMBRE;
    @NonNull
    private String NIF;
    @NonNull
    private String TELEFONO;

}
