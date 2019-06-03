package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.Review;
import prj.project.Simon.Silvia.exceptions.ReviewNotFoundException;
import prj.project.Simon.Silvia.repository.RepositoryFactory;
import prj.project.Simon.Silvia.repository.ReviewRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final RepositoryFactory repositoryFactory;


    @Transactional
    public List<Review> listAllReviews() {
        return repositoryFactory.createReviewRepository().findAll();
    }

    public List<Review> listAllReviewsForUser(Integer clientId) {
        return repositoryFactory.createReviewRepository().findAllForClient(clientId);
    }

    @Transactional
    public Review addReview(Review review) {
        return repositoryFactory.createReviewRepository().save(review);
    }

    @Transactional
    public void removeReview(Integer id){
        ReviewRepository repository = repositoryFactory.createReviewRepository();
        Review review = repository.findById(id).orElseThrow(ReviewNotFoundException::new);
        repository.removeReview(review);
    }

    @Transactional
    public void updateText(Integer id, String newText) {
        ReviewRepository repository = repositoryFactory.createReviewRepository();
        Review review = repository.findById(id).orElseThrow(ReviewNotFoundException::new);
        review.setText(newText);
        repository.save(review);
    }

    @Transactional
    public Review updateState(Integer id) {
        ReviewRepository repository = repositoryFactory.createReviewRepository();
        Review review = repository.findById(id).orElseThrow(ReviewNotFoundException::new);
       if(review.getState().equals("approved")){
           review.setText("decline");
       }
       else{
           review.setText("approved");
       }
        return repository.save(review);
    }


}
