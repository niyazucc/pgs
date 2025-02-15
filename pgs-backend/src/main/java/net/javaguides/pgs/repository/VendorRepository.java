package net.javaguides.pgs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.pgs.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long>{

    
} 
