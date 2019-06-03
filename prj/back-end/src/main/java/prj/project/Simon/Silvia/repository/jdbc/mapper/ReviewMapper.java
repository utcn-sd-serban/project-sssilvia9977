package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.Review;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReviewMapper implements RowMapper<Review> {

    @Override
    public Review mapRow(ResultSet rs, int i) throws SQLException {

        return new Review(
                rs.getInt("id"),
                rs.getInt("client_user_id"),
                rs.getString("text"),
                rs.getString("state")
        );

    }



}
