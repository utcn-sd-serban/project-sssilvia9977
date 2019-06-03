package prj.project.Simon.Silvia.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import prj.project.Simon.Silvia.entity.Review;
import prj.project.Simon.Silvia.service.ReviewService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class EmplReviewController {
    private final ReviewService reviewService;

    @GetMapping("/reviews-empl")
    public List<Review> readAll(){
        return reviewService.listAllReviews();
    }

    @PostMapping("/update-review-state/{id}")
    public Review updateState(@PathVariable int id){
        return reviewService.updateState(id);
    }


}
