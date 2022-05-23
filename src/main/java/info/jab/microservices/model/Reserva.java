package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
@Table("RESERVA")
public class Reserva {
    @Id
    @NonNull
    @NotEmpty
    private int ID_RESERVA;
    @NonNull
    @NotEmpty
    private String EMAIL;
    @NonNull
    @NotEmpty
    private int ID_VIAJE;
    @NonNull
    @NotEmpty
    private int NUMERO_PERSONAS;
    @NonNull
    @NotEmpty
    private String FECHA_INICIO;
    @NonNull
    @NotEmpty
    private String FECHA_FINAL;
}
