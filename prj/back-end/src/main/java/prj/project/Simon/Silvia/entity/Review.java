package prj.project.Simon.Silvia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer clientId;
    private String text;
    private String state;  //approved or decline

    public Review(Integer clientId, String text){
        this.clientId = clientId;
        this.text = text;
        this.state = "decline" ;
    }

    public Review(Integer clientId, String text, String state){
        this.clientId = clientId;
        this.text = text;
        this.state = state ;
    }

}
