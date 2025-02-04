CREATE TABLE services (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    vendor_id BIGINT NULL,
    service_name VARCHAR(255) NULL,
    price DECIMAL(10, 2) NULL,
    description TEXT NULL,
    FOREIGN KEY (vendor_id) REFERENCES vendors(id) ON DELETE CASCADE
);
