package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.AllUsers;

import java.util.List;
import java.util.Optional;

public interface AllUserRepository {

    Optional<AllUsers> finddByEmail(String email);
    AllUsers save(AllUsers allUsers);

    List<AllUsers> findAll();

}
