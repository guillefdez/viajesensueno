package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Data
@Builder
@Table("VIAJE")
public class Viaje {
    @Id
    @NonNull
    int ID;
    @NonNull
    String NOMBRE;
    @NonNull
    String DESC_LARGA;
    @NonNull
    String DESC_CORTA;
    @NonNull
    String IMAGEN;
    @NonNull
    int PRECIO;
    @NonNull
    boolean ASIA;
    @NonNull
    boolean EUROPA;
    @NonNull
    boolean AMERICA;
    @NonNull
    boolean AFRICA;
    @NonNull
    boolean OCEANIA;
    @NonNull
    int DESCUENTO;
    @NonNull
    String AGENCIA;

}
