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
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String name;

    @Column(unique = true, nullable = true)
    private String email;


    @Column(nullable = true)
    private String role; // Add Role column (e.g., ADMIN, USER)

    @Column(nullable = true, length = 255)  // Ensure enough space for BCrypt hash
    private String password;
}
