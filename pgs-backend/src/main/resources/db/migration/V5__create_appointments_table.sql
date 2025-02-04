CREATE TABLE appointments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cust_id BIGINT NULL,
    vendor_id BIGINT NULL,
    service_id BIGINT NULL,
    date_time DATETIME NULL,
    status ENUM('PENDING', 'CONFIRMED', 'CANCELLED') NULL,
    FOREIGN KEY (cust_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES vendors(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);
