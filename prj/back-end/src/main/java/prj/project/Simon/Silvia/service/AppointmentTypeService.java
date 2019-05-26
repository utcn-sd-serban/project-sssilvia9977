package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.AppointmentType;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentTypeService {
    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<AppointmentType> listAllAppointmentsTypes() {
        return repositoryFactory.createAppointTypeRepository().findAll();
    }

    public Optional<AppointmentType> findAppointmentTypeById(Integer id) {
        return repositoryFactory.createAppointTypeRepository().findById(id);
    }




}
