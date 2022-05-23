package info.jab.microservices.model;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class Login {
    @NonNull
    String email;
    @NonNull
    String contraseña;
}
