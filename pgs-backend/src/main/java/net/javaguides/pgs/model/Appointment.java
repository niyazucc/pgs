package net.javaguides.pgs.model;

import jakarta.persistence.*;

public class Appointment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
}
