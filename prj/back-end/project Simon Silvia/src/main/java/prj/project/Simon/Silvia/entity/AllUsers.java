

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
public class AllUsers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String password;

    public AllUsers(String firstName, String lastName, String emailAddress, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    public AllUsers(String firstName, String lastName, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = firstName+"."+lastName+"@pets.com";
        this.password = password;
    }


}
