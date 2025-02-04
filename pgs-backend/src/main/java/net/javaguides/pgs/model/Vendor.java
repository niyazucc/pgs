package net.javaguides.pgs.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vendors")
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = true, unique = true) // Foreign key reference to users table
    private User user;

    @Column(nullable = true)
    private String businessName;

    @Column(nullable = true)
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true, length = 10)
    private Status status;

    public enum Status {
        PENDING,
        APPROVED,
        REJECTED
    }

}
