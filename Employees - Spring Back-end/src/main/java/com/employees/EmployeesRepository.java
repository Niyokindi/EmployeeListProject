package com.employees;

import org.springframework.data.repository.CrudRepository;
import org.json.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.*;




@Repository
public interface EmployeesRepository extends CrudRepository<Employees, Integer> {

    List<Employees> findByFirstName(String firstName, Pageable pageable);
}
