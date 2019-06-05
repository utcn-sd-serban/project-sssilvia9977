package prj.project.Simon.Silvia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer clientId;
    private Integer typeId;
    private String dateString;
    private boolean held;
    private int discount;
    private boolean addedDiscount;  //if the person used or not this appointent to calculate the dicount

    //yyy-dd-mm HH:mm asa e in baza de date   2019-05-06 12:08

    public Appointment(Integer clientId, Integer typeId, String appDate) {
        this.clientId = clientId;
        this.typeId = typeId;
        this.dateString = appDate;
        this.held = false;
        this.discount = 0;
        this.addedDiscount = false;
    }

    public Appointment(Integer id, Integer clientId, Integer typeId, String appDate) {
        this.id = id;
        this.clientId = clientId;
        this.typeId = typeId;
        this.dateString = appDate;
        this.held = false;
    }

    public boolean getHeld() {
        return held;
    }
    public boolean getAddedDiscout() {
        return addedDiscount;
    }

}