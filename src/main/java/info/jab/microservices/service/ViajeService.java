package info.jab.microservices.service;

import info.jab.microservices.model.Viaje;
import info.jab.microservices.repository.ViajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ViajeService {

    @Autowired
    private ViajeRepository viajeRepository;

    public List<Viaje> getViaje(){
        return viajeRepository.getViaje();
    }

    public  Viaje getViajeByID(int id){
        return  viajeRepository.getViajeByID(id);
    }

    public  List<Viaje> getViajesOferta(){
        return  viajeRepository.getViajeOferta();
    }

    public List<Viaje> getViajeFiltro(boolean asia, boolean europa, boolean america, boolean africa, boolean oceania){
        Set<Viaje> viajes = new HashSet<>();
        if(asia) {
            List<Viaje> individual = getViajeAsia(asia);
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if(europa) {
            List<Viaje> individual = getViajeEuropa(europa);
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if(america) {
            List<Viaje> individual = getViajeAmerica(america);
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if(africa) {
            List<Viaje> individual = getViajeAfrica(africa);
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if(oceania) {
            List<Viaje> individual = getViajeOceania(oceania);
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if (Boolean.FALSE.equals(asia) && Boolean.FALSE.equals(europa) && Boolean.FALSE.equals(america) && Boolean.FALSE.equals(africa) && Boolean.FALSE.equals(oceania)){
            List<Viaje> individual = getViaje();
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        if (Boolean.FALSE.equals(asia) && Boolean.FALSE.equals(europa) && Boolean.FALSE.equals(america) && Boolean.FALSE.equals(africa) && Boolean.FALSE.equals(oceania)){
            List<Viaje> individual = getViaje();
            for (Viaje r : individual){
                viajes.add(r);
            }
        }
        List<Viaje> viajeLista = new ArrayList<>(viajes);
        return viajeLista;
    }
    public  List<Viaje> getViajeAsia(boolean asia){
        return  viajeRepository.getViajeAsiatico(asia);
    }

    public  List<Viaje> getViajeEuropa(boolean europa){
        return  viajeRepository.getViajeEuropeo(europa);
    }

    public  List<Viaje> getViajeAmerica(boolean america){
        return  viajeRepository.getViajeAmericano(america);
    }

    public  List<Viaje> getViajeAfrica(boolean africa){
        return  viajeRepository.getViajeAfricano(africa);
    }

    public  List<Viaje> getViajeOceania(boolean oceania){
        return  viajeRepository.getViajeOceanico(oceania);
    }

}
