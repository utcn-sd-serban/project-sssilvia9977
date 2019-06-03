package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.Review;
import prj.project.Simon.Silvia.repository.ReviewRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.AppointmentMapper;
import prj.project.Simon.Silvia.repository.jdbc.mapper.ReviewMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class JDBCReviewRepository implements ReviewRepository {
    public final JdbcTemplate template;


    @Override
    public Review save(Review review) {
        if (review.getId() == null) {
            review.setId(insert(review));
        } else {
            update(review);
        }
        return review;
    }

    @Override
    public void removeReview(Review review) {
        template.update("DELETE FROM review WHERE id = ?", review.getId());
    }


    @Override
    public List<Review> findAll() {
        {
            return template.query("SELECT * FROM review", new ReviewMapper());
        }
    }

    @Override
    public List<Review> findAllForClient(Integer userId) {
        return findAll().stream().filter(
                (Review a) ->
                        a.getClientId().equals(userId)).collect(Collectors.toList());

    }

    @Override
    public Optional<Review> findById(Integer id) {
        List<Review> reviews = template.query("SELECT * FROM review WHERE id = ?", new ReviewMapper(), id);
        return reviews.isEmpty() ? Optional.empty() : Optional.of(reviews.get(0));
    }


    private int insert(Review review) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);
        insert.setTableName("review");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> map = new HashMap<>();
        map.put("client_user_id", review.getClientId());
        map.put("text", review.getText());
        map.put("state", review.getState());
        return insert.executeAndReturnKey(map).intValue();

    }


    private void update(Review review) {
        template.update("UPDATE review SET client_user_id = ?, text = ?, state = ? WHERE id = ?",
                review.getClientId(), review.getText(), review.getState(), review.getId());
    }


}
