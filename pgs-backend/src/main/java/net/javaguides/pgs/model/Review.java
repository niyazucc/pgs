package net.javaguides.pgs.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true, unique = true)
    private User user;

    @ManyToOne
    @JoinColumn(name = "vendor_id", nullable = true, unique = true)
    private Vendor vendor;

    @Column(nullable = true)
    private int rating;
}
