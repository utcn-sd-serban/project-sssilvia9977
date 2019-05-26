package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository {

    List<Review> findAll();
    Optional<Review> findById(Integer id);
    List<Review> findAllForClient(Integer userId);
    Review save(Review review);

    void removeReview(Review review);


}
