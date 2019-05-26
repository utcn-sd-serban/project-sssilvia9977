package prj.project.Simon.Silvia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


//You can add a type only if you are an employee

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public final class AppointmentType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private int duration;
    private int price;

    public AppointmentType(String name, int duration, int price){
        this.name = name;
        this.duration = duration;
        this.price = price;
    }



}
