package info.jab.microservices.service;

import info.jab.microservices.model.Reserva;
import info.jab.microservices.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    public void saveReserva(Reserva r){
        reservaRepository.saveBooking(r.getID_VIAJE(), r.getEMAIL(), r.getFECHA_INICIO(), r.getFECHA_FINAL(), r.getNUMERO_PERSONAS());
    }

    public List<Reserva> getBookings(String email){
        return reservaRepository.getBookings(email);
    }

    public void deleteReserva(int id_reserva){
        reservaRepository.deleteBooking(id_reserva);
    }

    public void updateReserva(Reserva r){
        reservaRepository.updateReserva(r.getFECHA_INICIO(),r.getFECHA_FINAL(),r.getNUMERO_PERSONAS(),r.getID_RESERVA());
    }
}
