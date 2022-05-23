package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Builder
@Table("FAVORITOS")
public class Favoritos {
    @Id
    @NonNull
    private String email;
    @NonNull
    private int id;
}
